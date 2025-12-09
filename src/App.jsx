import { useState, useEffect } from 'react'
// import './App.css' - Replaced by Tailwind
import './theme/theme.css'
import UseCasePanel from './components/UseCasePanel'
import UseCaseCard from './components/UseCaseCard'
import { useCasesByCategory } from './useCases'
import { useTranslation, LANGUAGES } from './i18n'

function App() {
  const { t, language, setLanguage } = useTranslation()
  const [selectedUseCase, setSelectedUseCase] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showLegend, setShowLegend] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [activeCategory, setActiveCategory] = useState('beginner')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleStepChange = (step) => {
    setCurrentStep(step)
  }

  const handleSelectUseCase = (useCase) => {
    setSelectedUseCase(useCase)
    setCurrentStep(0)
    setIsPlaying(false)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setIsPlaying(false)
  }

  return (
    <div className="flex flex-col h-screen w-full max-w-full mx-auto overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[var(--bg-card)] backdrop-blur-xl border-b border-[var(--glass-border)] shadow-sm z-10 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl drop-shadow-sm animate-[float_3s_ease-in-out_infinite]">🌊</span>
            <h1 className="text-2xl font-extrabold m-0 bg-gradient-to-br from-ctp-blue via-ctp-mauve to-ctp-peach bg-clip-text text-transparent tracking-tight">
              {t('app.title')}
            </h1>
          </div>
          <p className="hidden md:block text-sm font-medium text-[var(--text-secondary)] m-0">
            {t('app.subtitle')}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button 
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] font-semibold text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-card-hover)] hover:border-ctp-mauve hover:text-ctp-mauve hover:-translate-y-0.5 shadow-sm hover:shadow-md ${showLanguageMenu ? '!border-ctp-mauve !text-ctp-mauve bg-[var(--bg-card-hover)]' : ''}`}
              onClick={() => setShowLanguageMenu(!showLanguageMenu)} 
              title="Change Language"
            >
              {LANGUAGES.find(l => l.code === language)?.flag} {LANGUAGES.find(l => l.code === language)?.name}
            </button>
            
            {/* Language Menu */}
            {showLanguageMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setShowLanguageMenu(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left border-none bg-transparent cursor-pointer transition-all ${
                      language === lang.code 
                        ? 'bg-ctp-mauve/20 text-ctp-mauve font-semibold' 
                        : 'text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Branch Types */}
          <div className="relative">
            <button 
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] font-semibold text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-card-hover)] hover:border-ctp-blue hover:text-ctp-blue hover:-translate-y-0.5 shadow-sm hover:shadow-md ${showLegend ? '!border-ctp-blue !text-ctp-blue bg-[var(--bg-card-hover)]' : ''}`}
              onClick={() => setShowLegend(!showLegend)} 
              title="Show Branch Types"
            >
              {t('app.branchTypes')} ℹ️
            </button>
            
            {/* Legend Popover */}
            {showLegend && (
              <div className="absolute right-0 top-full mt-3 w-80 bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl shadow-xl p-5 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-color)]">
                  <h3 className="m-0 text-base font-bold text-[var(--text-primary)]">{t('app.branchTypes')}</h3>
                  <button 
                    className="flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-secondary)] hover:bg-ctp-surface0 hover:text-[var(--text-primary)] transition-colors border-none bg-transparent cursor-pointer" 
                    onClick={() => setShowLegend(false)}
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-green text-ctp-green"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">main</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.main')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-blue text-ctp-blue"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">develop</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.develop')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-lavender text-ctp-lavender"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">feature/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.feature')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-mauve text-ctp-mauve"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">release/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.release')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-red text-ctp-red"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">hotfix/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.hotfix')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-peach text-ctp-peach"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">bugfix/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.bugfix')}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {selectedUseCase ? (
          <>
            <UseCasePanel 
              useCase={selectedUseCase}
              currentStep={currentStep}
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onStepChange={handleStepChange}
              onReset={handleReset}
              onBack={() => setSelectedUseCase(null)}
              onStepComplete={() => {
                if (currentStep < selectedUseCase.steps.length - 1) {
                  setCurrentStep(prev => prev + 1)
                } else {
                  setIsPlaying(false)
                }
              }}
            />
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center p-8 overflow-y-auto gap-8">
            <div className="max-w-2xl text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold m-0 mb-4 bg-gradient-to-br from-ctp-blue to-ctp-mauve bg-clip-text text-transparent -tracking-[0.02em]">
                {t('app.welcome')}
              </h2>
              <p className="text-[var(--text-secondary)] text-lg m-0 leading-relaxed">
                {t('app.welcomeDescription')}
              </p>
            </div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(useCasesByCategory).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 border-2 ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-ctp-blue to-ctp-mauve text-white border-transparent shadow-lg scale-105'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-ctp-blue hover:text-ctp-blue hover:-translate-y-0.5'
                  }`}
                >
                  <span className="mr-2">{category.title.split(' ')[0]}</span>
                  <span>{category.title.split(' ').slice(1).join(' ')}</span>
                </button>
              ))}
            </div>
            
            {/* Category Description */}
            <p className="text-[var(--text-muted)] text-sm m-0">
              {useCasesByCategory[activeCategory]?.description}
            </p>
            
            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
              {useCasesByCategory[activeCategory]?.useCases.map(useCase => (
                <UseCaseCard
                  key={useCase.id}
                  useCase={useCase}
                  isActive={selectedUseCase?.id === useCase.id}
                  onClick={() => handleSelectUseCase(useCase)}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App

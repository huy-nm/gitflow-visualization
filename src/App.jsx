import { useState, useEffect } from 'react'
// import './App.css' - Replaced by Tailwind
import './theme/theme.css'
import UseCasePanel from './components/UseCasePanel'
import UseCaseCard from './components/UseCaseCard'
import { allUseCases as useCases } from './useCases'

function App() {
  const [selectedUseCase, setSelectedUseCase] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showLegend, setShowLegend] = useState(false)
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
              GitFlow Visualizer
            </h1>
          </div>
          <p className="hidden md:block text-sm font-medium text-[var(--text-secondary)] m-0">
            Interactive guide to understanding GitFlow branching model
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button 
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] font-semibold text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-card-hover)] hover:border-ctp-blue hover:text-ctp-blue hover:-translate-y-0.5 shadow-sm hover:shadow-md ${showLegend ? '!border-ctp-blue !text-ctp-blue bg-[var(--bg-card-hover)]' : ''}`}
              onClick={() => setShowLegend(!showLegend)} 
              title="Show Branch Types"
            >
              Branch Types ℹ️
            </button>
            
            {/* Legend Popover */}
            {showLegend && (
              <div className="absolute right-0 top-full mt-3 w-80 bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl shadow-xl p-5 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-color)]">
                  <h3 className="m-0 text-base font-bold text-[var(--text-primary)]">Branch Types</h3>
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
                      <span className="text-xs text-[var(--text-secondary)]">Production-ready code</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-blue text-ctp-blue"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">develop</strong>
                      <span className="text-xs text-[var(--text-secondary)]">Integration branch</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-lavender text-ctp-lavender"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">feature/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">New features</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-mauve text-ctp-mauve"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">release/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">Release prep</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-red text-ctp-red"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">hotfix/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">Production fixes</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-active)] transition-all">
                    <div className="w-4 h-4 rounded-md shadow-[0_0_10px_currentColor] shrink-0 bg-ctp-peach text-ctp-peach"></div>
                    <div className="flex flex-col gap-0.5">
                      <strong className="font-mono text-sm text-[var(--text-primary)]">bugfix/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">Dev bug fixes</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <button 
            className="w-12 h-12 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] cursor-pointer text-xl flex items-center justify-center transition-all hover:bg-[var(--bg-card-hover)] hover:border-ctp-lavender hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            onClick={toggleTheme} 
            title="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button> */}
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
          <div className="flex-1 flex flex-col items-center p-8 overflow-y-auto gap-12">
            <div className="max-w-2xl text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold m-0 mb-4 bg-gradient-to-br from-ctp-blue to-ctp-mauve bg-clip-text text-transparent -tracking-[0.02em]">
                Welcome to GitFlow Visualizer! 👋
              </h2>
              <p className="text-[var(--text-secondary)] text-lg m-0 leading-relaxed">
                Select a workflow below to see an interactive visualization of the GitFlow branching model.
              </p>
            </div>
            
            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
              {useCases.map(useCase => (
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

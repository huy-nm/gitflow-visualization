
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import './theme/theme.css'
import { useTranslation, LANGUAGES } from './i18n'
import Home from './pages/Home'
import UseCaseView from './pages/UseCaseView'
import { allUseCases } from './useCases'
import { Info, GitCommit, GitBranch, Package, Fire, Bug, X, ArrowLeft } from '@phosphor-icons/react'
import { initGA, trackPageView } from './utils/analytics'
import { getUseCaseIcon } from './components/UseCaseIcon'
import { cloneElement } from 'react'

function App() {
  const { t, language, setLanguage } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [showLegend, setShowLegend] = useState(false)
  const [theme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  // Extract use case ID from URL if on use case view
  const useCaseId = location.pathname.startsWith('/use-case/') 
    ? location.pathname.split('/use-case/')[1] 
    : null
  const currentUseCase = useCaseId ? allUseCases.find(uc => uc.id === useCaseId) : null

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Initialize Google Analytics
  useEffect(() => {
    initGA()
  }, [])

  // Track page views on route changes
  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])

  return (
    <div className="flex flex-col h-screen w-full max-w-full mx-auto overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[var(--bg-card)] backdrop-blur-xl border-b border-[var(--glass-border)] shadow-sm z-10 transition-all duration-300">
        {/* Left section */}
        <div className="flex items-center gap-3 flex-1">
          {currentUseCase ? (
            // Use case view: Back button only
            <button 
              className="flex items-center justify-center w-10 h-10 text-[var(--text-secondary)] bg-transparent border border-[var(--border-color)] rounded-lg cursor-pointer transition-all hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)] hover:border-ctp-blue/50" 
              onClick={() => navigate('/')}
              title={t('panel.backToUseCases')}
            >
              <ArrowLeft size={20} weight="bold" />
            </button>
          ) : (
            // Homepage: Regular title
            <h1 className="text-2xl font-extrabold m-0 bg-gradient-to-br from-ctp-blue via-ctp-mauve to-ctp-peach bg-clip-text text-transparent tracking-tight">
              {t('app.title')}
            </h1>
          )}
        </div>

        {/* Center section - Use case info */}
        {currentUseCase && (
          <div className="flex items-center gap-3 flex-1 justify-center">
            <span className="text-2xl">
              {cloneElement(getUseCaseIcon(useCaseId, currentUseCase.category), { size: 32 })}
            </span>
            <div className="max-w-md">
              <h2 className="text-xl font-bold m-0 bg-gradient-to-br from-ctp-blue to-ctp-mauve bg-clip-text text-transparent leading-tight truncate">
                {currentUseCase.title}
              </h2>
              <p className="text-sm text-[var(--text-muted)] m-0 truncate">{currentUseCase.description}</p>
            </div>
          </div>
        )}

        {/* Right section */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          {/* Language Switcher */}
          <div className="relative">
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-transparent text-xl transition-all hover:bg-[var(--bg-card-hover)] hover:scale-105 cursor-pointer border-none"
              onClick={() => {
                const currentIndex = LANGUAGES.findIndex(l => l.code === language)
                const nextIndex = (currentIndex + 1) % LANGUAGES.length
                setLanguage(LANGUAGES[nextIndex].code)
              }} 
              title={`Switch Language (${LANGUAGES.find(l => l.code === language)?.name})`}
            >
              {LANGUAGES.find(l => l.code === language)?.flag}
            </button>
          </div>
          
          {/* Branch Types */}
          <div className="relative">
            <button 
              className={`flex items-center justify-center w-10 h-10 rounded-xl bg-transparent text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-card-hover)] hover:text-ctp-blue hover:scale-105 ${showLegend ? '!text-ctp-blue bg-[var(--bg-card-hover)]' : ''}`}
              onClick={() => setShowLegend(!showLegend)} 
              title={t('app.branchTypes')}
            >
              <Info size={20} weight="bold" />
            </button>
            
            {/* Legend Popover */}
            {showLegend && (
              <div className="absolute right-0 top-full mt-3 w-80 bg-white/95 dark:bg-[#1e1e2e]/95 backdrop-blur-2xl border border-[var(--glass-border)] rounded-2xl shadow-2xl p-5 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-color)]">
                  <h3 className="m-0 text-base font-bold text-[var(--text-primary)]">{t('app.branchTypes')}</h3>
                  <button 
                    className="flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-secondary)] hover:bg-ctp-surface0 hover:text-[var(--text-primary)] transition-colors border-none bg-transparent cursor-pointer" 
                    onClick={() => setShowLegend(false)}
                  >
                    <X size={18} weight="bold" />
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {/* Main */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-green/10 border border-ctp-green/20 hover:border-ctp-green/50 hover:shadow-[0_0_15px_-5px_var(--ctp-green)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-green text-white shadow-sm group-hover:scale-110 transition-transform">
                      <GitCommit size={16} weight="bold" />
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-green font-bold">main</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.main')}</span>
                    </div>
                  </div>

                  {/* Develop */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-blue/10 border border-ctp-blue/20 hover:border-ctp-blue/50 hover:shadow-[0_0_15px_-5px_var(--ctp-blue)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-blue text-white shadow-sm group-hover:scale-110 transition-transform">
                      <GitCommit size={16} weight="bold" />
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-blue font-bold">develop</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.develop')}</span>
                    </div>
                  </div>

                  {/* Feature */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-lavender/10 border border-ctp-lavender/20 hover:border-ctp-lavender/50 hover:shadow-[0_0_15px_-5px_var(--ctp-lavender)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-lavender text-white shadow-sm group-hover:scale-110 transition-transform">
                      <GitBranch size={16} weight="bold" />
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-lavender font-bold">feature/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.feature')}</span>
                    </div>
                  </div>

                  {/* Release */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-mauve/10 border border-ctp-mauve/20 hover:border-ctp-mauve/50 hover:shadow-[0_0_15px_-5px_var(--ctp-mauve)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-mauve text-white shadow-sm group-hover:scale-110 transition-transform">
                      <Package size={16} weight="bold" />
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-mauve font-bold">release/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.release')}</span>
                    </div>
                  </div>

                  {/* Hotfix */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-red/10 border border-ctp-red/20 hover:border-ctp-red/50 hover:shadow-[0_0_15px_-5px_var(--ctp-red)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-red text-white shadow-sm group-hover:scale-110 transition-transform">
                      <Fire size={16} weight="bold" />
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-red font-bold">hotfix/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.hotfix')}</span>
                    </div>
                  </div>

                  {/* Bugfix */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-peach/10 border border-ctp-peach/20 hover:border-ctp-peach/50 hover:shadow-[0_0_15px_-5px_var(--ctp-peach)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-peach text-white shadow-sm group-hover:scale-110 transition-transform">
                      <Bug size={16} weight="bold" />
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-peach font-bold">bugfix/*</strong>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-case/:id" element={<UseCaseView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

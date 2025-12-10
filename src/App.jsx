
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './theme/theme.css'
import { useTranslation, LANGUAGES } from './i18n'
import Home from './pages/Home'
import UseCaseView from './pages/UseCaseView'

function App() {
  const { t, language, setLanguage } = useTranslation()
  const [showLegend, setShowLegend] = useState(false)
  const [theme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
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
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {/* Main */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-green/10 border border-ctp-green/20 hover:border-ctp-green/50 hover:shadow-[0_0_15px_-5px_var(--ctp-green)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-green text-white shadow-sm group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle></svg>
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-green font-bold">main</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.main')}</span>
                    </div>
                  </div>

                  {/* Develop */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-blue/10 border border-ctp-blue/20 hover:border-ctp-blue/50 hover:shadow-[0_0_15px_-5px_var(--ctp-blue)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-blue text-white shadow-sm group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle></svg>
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-blue font-bold">develop</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.develop')}</span>
                    </div>
                  </div>

                  {/* Feature */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-lavender/10 border border-ctp-lavender/20 hover:border-ctp-lavender/50 hover:shadow-[0_0_15px_-5px_var(--ctp-lavender)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-lavender text-white shadow-sm group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><path d="M6 15l12-12"></path></svg>
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-lavender font-bold">feature/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.feature')}</span>
                    </div>
                  </div>

                  {/* Release */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-mauve/10 border border-ctp-mauve/20 hover:border-ctp-mauve/50 hover:shadow-[0_0_15px_-5px_var(--ctp-mauve)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-mauve text-white shadow-sm group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-mauve font-bold">release/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.release')}</span>
                    </div>
                  </div>

                  {/* Hotfix */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-red/10 border border-ctp-red/20 hover:border-ctp-red/50 hover:shadow-[0_0_15px_-5px_var(--ctp-red)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-red text-white shadow-sm group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-mono text-sm text-ctp-red font-bold">hotfix/*</strong>
                      <span className="text-xs text-[var(--text-secondary)]">{t('branches.hotfix')}</span>
                    </div>
                  </div>

                  {/* Bugfix */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-ctp-peach/10 border border-ctp-peach/20 hover:border-ctp-peach/50 hover:shadow-[0_0_15px_-5px_var(--ctp-peach)] transition-all duration-300 group cursor-default">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-ctp-peach text-white shadow-sm group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path></svg>
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

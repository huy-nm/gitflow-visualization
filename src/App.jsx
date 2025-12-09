import { useState, useEffect } from 'react'
import './App.css'
import './theme/theme.css'
import UseCasePanel from './components/UseCasePanel'
import UseCaseCard from './components/UseCaseCard'
import { allUseCases as useCases } from './useCases'

function App() {
  const [selectedUseCase, setSelectedUseCase] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
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
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">🌊</span>
            <h1>GitFlow Visualizer</h1>
          </div>
          <p className="tagline">Interactive guide to understanding GitFlow branching model</p>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>
      
      {/* Main content */}
      <main className="app-main">
        {selectedUseCase ? (
          <>
            {/* Back button and use case info */}
            <div className="selected-header">
              <button className="back-btn" onClick={() => setSelectedUseCase(null)}>
                ← Back to use cases
              </button>
              <div className="selected-info">
                <span className="selected-icon">{selectedUseCase.icon}</span>
                <span className="selected-title">{selectedUseCase.title}</span>
              </div>
            </div>
            <UseCasePanel 
              useCase={selectedUseCase}
              currentStep={currentStep}
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onStepChange={handleStepChange}
              onReset={handleReset}
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
          <div className="welcome-panel">
            <div className="welcome-content">
              <h2>Welcome to GitFlow Visualizer! 👋</h2>
              <p>Select a workflow below to see an interactive visualization of the GitFlow branching model.</p>
            </div>
            
            {/* Card Grid */}
            <div className="use-case-grid">
              {useCases.map(useCase => (
                <UseCaseCard
                  key={useCase.id}
                  useCase={useCase}
                  isActive={selectedUseCase?.id === useCase.id}
                  onClick={() => handleSelectUseCase(useCase)}
                />
              ))}
            </div>
            
            {/* Branch Legend */}
            <div className="branch-legend">
              <h4>Branch Types</h4>
              <div className="legend-grid">
                <div className="legend-item">
                  <div className="legend-color main"></div>
                  <div className="legend-info">
                    <strong>main</strong>
                    <span>Production-ready code</span>
                  </div>
                </div>
                <div className="legend-item">
                  <div className="legend-color develop"></div>
                  <div className="legend-info">
                    <strong>develop</strong>
                    <span>Integration branch</span>
                  </div>
                </div>
                <div className="legend-item">
                  <div className="legend-color feature"></div>
                  <div className="legend-info">
                    <strong>feature/*</strong>
                    <span>New features</span>
                  </div>
                </div>
                <div className="legend-item">
                  <div className="legend-color release"></div>
                  <div className="legend-info">
                    <strong>release/*</strong>
                    <span>Release prep</span>
                  </div>
                </div>
                <div className="legend-item">
                  <div className="legend-color hotfix"></div>
                  <div className="legend-info">
                    <strong>hotfix/*</strong>
                    <span>Production fixes</span>
                  </div>
                </div>
                <div className="legend-item">
                  <div className="legend-color bugfix"></div>
                  <div className="legend-info">
                    <strong>bugfix/*</strong>
                    <span>Dev bug fixes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App

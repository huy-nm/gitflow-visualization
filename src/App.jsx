import { useState } from 'react'
import './App.css'
import GitFlowVisualizer from './components/GitFlowVisualizer'
import Sidebar from './components/Sidebar'
import UseCasePanel from './components/UseCasePanel'

function App() {
  const [selectedUseCase, setSelectedUseCase] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const useCases = [
    {
      id: 'basic-feature',
      title: 'Feature Development',
      icon: '🌟',
      description: 'Create a new feature branch from develop, work on it, and merge back',
      steps: [
        { action: 'create-branch', from: 'develop', to: 'feature/login', message: 'Create feature branch from develop' },
        { action: 'commit', branch: 'feature/login', message: 'Add login form UI' },
        { action: 'commit', branch: 'feature/login', message: 'Add authentication logic' },
        { action: 'commit', branch: 'feature/login', message: 'Add unit tests' },
        { action: 'merge', from: 'feature/login', to: 'develop', message: 'Merge feature into develop' },
        { action: 'delete-branch', branch: 'feature/login', message: 'Delete feature branch' }
      ]
    },
    {
      id: 'release',
      title: 'Release Process',
      icon: '🚀',
      description: 'Prepare a release branch, finalize, and merge to main and develop',
      steps: [
        { action: 'create-branch', from: 'develop', to: 'release/1.0', message: 'Create release branch from develop' },
        { action: 'commit', branch: 'release/1.0', message: 'Bump version to 1.0.0' },
        { action: 'commit', branch: 'release/1.0', message: 'Update changelog' },
        { action: 'commit', branch: 'release/1.0', message: 'Fix minor bug found in QA' },
        { action: 'merge', from: 'release/1.0', to: 'main', message: 'Merge release into main' },
        { action: 'tag', branch: 'main', tag: 'v1.0.0', message: 'Tag release v1.0.0' },
        { action: 'merge', from: 'release/1.0', to: 'develop', message: 'Merge release back into develop' },
        { action: 'delete-branch', branch: 'release/1.0', message: 'Delete release branch' }
      ]
    },
    {
      id: 'hotfix',
      title: 'Hotfix Workflow',
      icon: '🔥',
      description: 'Fix a critical bug in production immediately',
      steps: [
        { action: 'create-branch', from: 'main', to: 'hotfix/security-patch', message: 'Create hotfix branch from main' },
        { action: 'commit', branch: 'hotfix/security-patch', message: 'Fix critical security vulnerability' },
        { action: 'commit', branch: 'hotfix/security-patch', message: 'Add regression tests' },
        { action: 'merge', from: 'hotfix/security-patch', to: 'main', message: 'Merge hotfix into main' },
        { action: 'tag', branch: 'main', tag: 'v1.0.1', message: 'Tag hotfix release v1.0.1' },
        { action: 'merge', from: 'hotfix/security-patch', to: 'develop', message: 'Merge hotfix into develop' },
        { action: 'delete-branch', branch: 'hotfix/security-patch', message: 'Delete hotfix branch' }
      ]
    },
    {
      id: 'multiple-features',
      title: 'Parallel Features',
      icon: '🔀',
      description: 'Multiple developers working on different features simultaneously',
      steps: [
        { action: 'create-branch', from: 'develop', to: 'feature/dashboard', message: 'Dev A creates dashboard feature' },
        { action: 'create-branch', from: 'develop', to: 'feature/profile', message: 'Dev B creates profile feature' },
        { action: 'commit', branch: 'feature/dashboard', message: 'Add dashboard layout' },
        { action: 'commit', branch: 'feature/profile', message: 'Add profile page' },
        { action: 'commit', branch: 'feature/dashboard', message: 'Add charts and widgets' },
        { action: 'commit', branch: 'feature/profile', message: 'Add avatar upload' },
        { action: 'merge', from: 'feature/profile', to: 'develop', message: 'Merge profile feature first' },
        { action: 'merge', from: 'feature/dashboard', to: 'develop', message: 'Merge dashboard feature' },
        { action: 'delete-branch', branch: 'feature/profile', message: 'Clean up profile branch' },
        { action: 'delete-branch', branch: 'feature/dashboard', message: 'Clean up dashboard branch' }
      ]
    },
    {
      id: 'bugfix-develop',
      title: 'Bugfix in Development',
      icon: '🐛',
      description: 'Fix a bug discovered during development phase',
      steps: [
        { action: 'create-branch', from: 'develop', to: 'bugfix/form-validation', message: 'Create bugfix branch' },
        { action: 'commit', branch: 'bugfix/form-validation', message: 'Fix email validation regex' },
        { action: 'commit', branch: 'bugfix/form-validation', message: 'Add test cases for edge cases' },
        { action: 'merge', from: 'bugfix/form-validation', to: 'develop', message: 'Merge bugfix into develop' },
        { action: 'delete-branch', branch: 'bugfix/form-validation', message: 'Delete bugfix branch' }
      ]
    },
    {
      id: 'full-cycle',
      title: 'Complete Sprint Cycle',
      icon: '🔄',
      description: 'A complete development cycle from features to release',
      steps: [
        { action: 'create-branch', from: 'develop', to: 'feature/api-v2', message: 'Start API v2 feature' },
        { action: 'commit', branch: 'feature/api-v2', message: 'Implement new endpoints' },
        { action: 'commit', branch: 'feature/api-v2', message: 'Add documentation' },
        { action: 'merge', from: 'feature/api-v2', to: 'develop', message: 'Complete API v2 feature' },
        { action: 'delete-branch', branch: 'feature/api-v2', message: 'Clean up feature branch' },
        { action: 'create-branch', from: 'develop', to: 'release/2.0', message: 'Start release 2.0' },
        { action: 'commit', branch: 'release/2.0', message: 'Prepare release notes' },
        { action: 'merge', from: 'release/2.0', to: 'main', message: 'Release to production' },
        { action: 'tag', branch: 'main', tag: 'v2.0.0', message: 'Tag version 2.0.0' },
        { action: 'merge', from: 'release/2.0', to: 'develop', message: 'Sync develop with release' },
        { action: 'delete-branch', branch: 'release/2.0', message: 'Clean up release branch' }
      ]
    }
  ]

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
      <header className="app-header">
        <div className="logo">
          <span className="logo-icon">🌊</span>
          <h1>GitFlow Visualizer</h1>
        </div>
        <p className="tagline">Interactive guide to understanding GitFlow branching model</p>
      </header>
      
      <main className="app-main">
        <Sidebar 
          useCases={useCases} 
          selectedUseCase={selectedUseCase}
          onSelectUseCase={handleSelectUseCase}
        />
        
        <div className="content">
          {selectedUseCase ? (
            <>
              <UseCasePanel 
                useCase={selectedUseCase}
                currentStep={currentStep}
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause}
                onStepChange={handleStepChange}
                onReset={handleReset}
              />
              <GitFlowVisualizer 
                useCase={selectedUseCase}
                currentStep={currentStep}
                isPlaying={isPlaying}
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
                <p>Select a use case from the sidebar to see an interactive visualization of the GitFlow branching model.</p>
                
                <div className="gitflow-intro">
                  <h3>What is GitFlow?</h3>
                  <p>GitFlow is a branching model that helps teams manage their Git repositories more effectively. It defines a strict branching structure designed around project releases.</p>
                  
                  <div className="branch-legend">
                    <h4>Branch Types</h4>
                    <div className="legend-grid">
                      <div className="legend-item">
                        <div className="legend-color main"></div>
                        <div className="legend-info">
                          <strong>main</strong>
                          <span>Production-ready code, always deployable</span>
                        </div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color develop"></div>
                        <div className="legend-info">
                          <strong>develop</strong>
                          <span>Integration branch for features</span>
                        </div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color feature"></div>
                        <div className="legend-info">
                          <strong>feature/*</strong>
                          <span>New feature development</span>
                        </div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color release"></div>
                        <div className="legend-info">
                          <strong>release/*</strong>
                          <span>Release preparation branch</span>
                        </div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color hotfix"></div>
                        <div className="legend-info">
                          <strong>hotfix/*</strong>
                          <span>Critical production fixes</span>
                        </div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color bugfix"></div>
                        <div className="legend-info">
                          <strong>bugfix/*</strong>
                          <span>Bug fixes in development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="quick-start">
                  <h4>🚀 Quick Start</h4>
                  <p>Click on any use case in the sidebar to see it animated step-by-step!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App

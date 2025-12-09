import GitFlowVisualizer from './GitFlowVisualizer'
import './UseCasePanel.css'

function UseCasePanel({ useCase, currentStep, isPlaying, onPlayPause, onStepChange, onReset, onStepComplete }) {
  return (
    <div className="use-case-panel">
      {/* Top bar: Use case title + Controls */}
      <div className="panel-header">
        <div className="header-left">
          <span className="panel-icon">{useCase.icon}</span>
          <div className="title-area">
            <h2>{useCase.title}</h2>
            <p className="panel-description">{useCase.description}</p>
          </div>
        </div>
        
        {/* Minimal Controls - moved to top right */}
        <div className="playback-controls">
          <button className="ctrl-btn" onClick={onReset} title="Reset">⟲</button>
          <button 
            className="ctrl-btn" 
            onClick={() => onStepChange(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            title="Previous"
          >
            ←
          </button>
          <button 
            className={`ctrl-btn play ${isPlaying ? 'playing' : ''}`}
            onClick={onPlayPause}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button 
            className="ctrl-btn"
            onClick={() => onStepChange(Math.min(useCase.steps.length - 1, currentStep + 1))}
            disabled={currentStep === useCase.steps.length - 1}
            title="Next"
          >
            →
          </button>
          <span className="step-counter">{currentStep + 1}/{useCase.steps.length}</span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentStep + 1) / useCase.steps.length) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Main content: Steps on left, Visualization on right */}
      <div className="panel-content">
        {/* Left: Steps */}
        <div className="steps-panel">
          <div className="steps-list">
            {useCase.steps.map((step, index) => (
              <button
                key={index}
                className={`step-item ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                onClick={() => onStepChange(index)}
              >
                <span className="step-number">{index + 1}</span>
                <span className="step-action">{getActionIcon(step.action)}</span>
                <span className="step-label">{getShortLabel(step)}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Right: Message + Visualization */}
        <div className="visualization-panel">
          {/* Message above visualization */}
          <div className="current-message">
            <code className="git-command">{getGitCommand(useCase.steps[currentStep])}</code>
            <span className="step-description">{useCase.steps[currentStep]?.message}</span>
          </div>
          
          {/* Visualization */}
          <GitFlowVisualizer 
            useCase={useCase}
            currentStep={currentStep}
            isPlaying={isPlaying}
            onStepComplete={onStepComplete}
          />
        </div>
      </div>
    </div>
  )
}

function getActionIcon(action) {
  const icons = {
    'create-branch': '🌿',
    'commit': '📝',
    'merge': '🔀',
    'delete-branch': '🗑',
    'tag': '🏷'
  }
  return icons[action] || '•'
}

function getShortLabel(step) {
  switch (step.action) {
    case 'create-branch':
      return step.to.split('/')[1] || step.to
    case 'commit':
      return step.message.slice(0, 15) + (step.message.length > 15 ? '...' : '')
    case 'merge':
      return `→ ${step.to}`
    case 'delete-branch':
      return 'Delete'
    case 'tag':
      return step.tag
    default:
      return step.message?.slice(0, 10) || ''
  }
}

function getGitCommand(step) {
  switch (step.action) {
    case 'create-branch':
      return `git checkout -b ${step.to}`
    case 'commit':
      return `git commit -m "..."`
    case 'merge':
      return `git merge ${step.from}`
    case 'delete-branch':
      return `git branch -d ${step.branch}`
    case 'tag':
      return `git tag ${step.tag}`
    default:
      return ''
  }
}

export default UseCasePanel

import './UseCasePanel.css'

function UseCasePanel({ useCase, currentStep, isPlaying, onPlayPause, onStepChange, onReset }) {
  return (
    <div className="use-case-panel">
      <div className="panel-header">
        <div className="panel-title">
          <span className="panel-icon">{useCase.icon}</span>
          <div>
            <h2>{useCase.title}</h2>
            <p>{useCase.description}</p>
          </div>
        </div>
        
        <div className="playback-controls">
          <button 
            className="control-btn" 
            onClick={onReset}
            title="Reset"
          >
            ⏮️
          </button>
          <button 
            className="control-btn prev" 
            onClick={() => onStepChange(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            title="Previous step"
          >
            ⏪
          </button>
          <button 
            className="control-btn play"
            onClick={onPlayPause}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button 
            className="control-btn next"
            onClick={() => onStepChange(Math.min(useCase.steps.length - 1, currentStep + 1))}
            disabled={currentStep === useCase.steps.length - 1}
            title="Next step"
          >
            ⏩
          </button>
        </div>
      </div>
      
      <div className="steps-timeline">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentStep + 1) / useCase.steps.length) * 100}%` }}
          />
        </div>
        
        <div className="steps-list">
          {useCase.steps.map((step, index) => (
            <button
              key={index}
              className={`step-item ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
              onClick={() => onStepChange(index)}
            >
              <span className="step-number">{index + 1}</span>
              <div className="step-content">
                <span className="step-action">{getActionLabel(step.action)}</span>
                <span className="step-message">{step.message}</span>
              </div>
              {index === currentStep && (
                <span className="step-indicator">◀</span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="current-step-detail">
        <div className="step-badge">
          Step {currentStep + 1} of {useCase.steps.length}
        </div>
        <div className="step-command">
          <code>{getGitCommand(useCase.steps[currentStep])}</code>
        </div>
      </div>
    </div>
  )
}

function getActionLabel(action) {
  const labels = {
    'create-branch': '🌿 Create Branch',
    'commit': '📝 Commit',
    'merge': '🔀 Merge',
    'delete-branch': '🗑️ Delete Branch',
    'tag': '🏷️ Tag'
  }
  return labels[action] || action
}

function getGitCommand(step) {
  switch (step.action) {
    case 'create-branch':
      return `git checkout -b ${step.to} ${step.from}`
    case 'commit':
      return `git commit -m "${step.message}"`
    case 'merge':
      return `git checkout ${step.to} && git merge ${step.from}`
    case 'delete-branch':
      return `git branch -d ${step.branch}`
    case 'tag':
      return `git tag ${step.tag}`
    default:
      return ''
  }
}

export default UseCasePanel

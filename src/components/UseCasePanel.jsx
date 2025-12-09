import GitFlowVisualizer from './GitFlowVisualizer'

function UseCasePanel({ useCase, currentStep, isPlaying, onPlayPause, onStepChange, onReset, onBack, onStepComplete }) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[var(--bg-card)] backdrop-blur-3xl rounded-[20px] border border-[var(--glass-border)] shadow-xl mb-8 mx-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Compact Header - Back + Title */}
      <div className="flex items-center gap-4 px-5 py-3 bg-white/5 border-b border-[var(--border-color)]">
        {/* Back Button */}
        <button 
          className="flex items-center justify-center w-9 h-9 text-lg text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl cursor-pointer transition-all hover:text-ctp-blue hover:bg-[var(--bg-card-hover)] hover:border-ctp-blue hover:-translate-x-0.5 hover:shadow-sm shrink-0" 
          onClick={onBack}
          title="Back to use cases"
        >
          ←
        </button>
        
        {/* Title */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="text-2xl shrink-0">{useCase.icon}</span>
          <div className="min-w-0">
            <h2 className="text-lg font-bold m-0 bg-gradient-to-br from-ctp-blue to-ctp-mauve bg-clip-text text-transparent truncate">
              {useCase.title}
            </h2>
            <p className="text-xs text-[var(--text-muted)] m-0 truncate">{useCase.description}</p>
          </div>
        </div>
      </div>
      
      {/* Full-width Visualization Area */}
      <div className="flex-1 flex flex-col overflow-hidden p-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]">
        {/* Current Step Message */}
        <div className="flex items-center gap-4 p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl mb-4 shadow-sm backdrop-blur-md">
          <code className="font-mono text-sm text-ctp-green bg-green-400/10 px-3 py-1.5 rounded-lg whitespace-nowrap border border-green-400/20">
            {getGitCommand(useCase.steps[currentStep])}
          </code>
          <span className="flex-1 text-base font-medium text-[var(--text-primary)]">
            {useCase.steps[currentStep]?.message}
          </span>
        </div>
        
        {/* Visualization - Full Width */}
        <GitFlowVisualizer 
          useCase={useCase}
          currentStep={currentStep}
          isPlaying={isPlaying}
          onStepComplete={onStepComplete}
        />
      </div>
      
      {/* Bottom Timeline Bar - Controls + Horizontal Steps + Step Counter */}
      <div className="px-6 py-4 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
        <div className="flex items-center gap-4">
          {/* Playback Controls */}
          <div className="flex items-center gap-1 bg-[var(--bg-card)] p-1.5 rounded-xl border border-[var(--border-color)] shadow-sm">
            <button 
              className="w-9 h-9 border-none bg-transparent text-[var(--text-secondary)] cursor-pointer rounded-lg text-lg flex items-center justify-center transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed" 
              onClick={onReset} 
              title="Reset"
            >
              ⟲
            </button>
            <button 
              className="w-9 h-9 border-none bg-transparent text-[var(--text-secondary)] cursor-pointer rounded-lg text-lg flex items-center justify-center transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed" 
              onClick={() => onStepChange(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              title="Previous"
            >
              ←
            </button>
            <button 
              className={`w-10 h-10 border-none cursor-pointer rounded-xl text-lg flex items-center justify-center transition-all ${isPlaying ? 'bg-ctp-peach/20 text-ctp-peach hover:bg-ctp-peach hover:text-ctp-base' : 'bg-ctp-blue/20 text-ctp-blue hover:bg-ctp-blue hover:text-ctp-base'}`}
              onClick={onPlayPause}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button 
              className="w-9 h-9 border-none bg-transparent text-[var(--text-secondary)] cursor-pointer rounded-lg text-lg flex items-center justify-center transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed" 
              onClick={() => onStepChange(Math.min(useCase.steps.length - 1, currentStep + 1))}
              disabled={currentStep === useCase.steps.length - 1}
              title="Next"
            >
              →
            </button>
          </div>
          
          {/* Horizontal Timeline */}
          <div className="flex-1 flex items-center gap-1">
            {useCase.steps.map((step, index) => (
              <button
                key={index}
                className="group relative flex-1 h-2 p-0 border-none cursor-pointer bg-transparent"
                onClick={() => onStepChange(index)}
                title={`Step ${index + 1}: ${getShortLabel(step)}`}
              >
                {/* Progress bar segment */}
                <div className={`
                  h-full rounded-full transition-all duration-300
                  ${index < currentStep ? 'bg-ctp-green' : ''}
                  ${index === currentStep ? 'bg-gradient-to-r from-ctp-blue to-ctp-mauve shadow-[0_0_8px_rgba(137,180,250,0.5)]' : ''}
                  ${index > currentStep ? 'bg-[var(--border-color)]' : ''}
                  group-hover:scale-y-150 group-hover:brightness-110
                `} />
                
                {/* Step indicator dot */}
                <div className={`
                  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-3 h-3 rounded-full border-2 transition-all duration-200
                  ${index < currentStep ? 'bg-ctp-green border-ctp-green scale-100' : ''}
                  ${index === currentStep ? 'bg-ctp-blue border-ctp-blue scale-125 shadow-[0_0_10px_rgba(137,180,250,0.6)]' : ''}
                  ${index > currentStep ? 'bg-[var(--bg-card)] border-[var(--border-color)] scale-75 opacity-60' : ''}
                  group-hover:scale-150
                `} />
                
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 text-xs">
                  <div className="flex items-center gap-2">
                    <span>{getActionIcon(step.action)}</span>
                    <span className="font-medium text-[var(--text-primary)]">{getShortLabel(step)}</span>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--bg-card)] border-r border-b border-[var(--border-color)] rotate-45 -mt-1" />
                </div>
              </button>
            ))}
          </div>
          
          {/* Step Counter */}
          <span className="text-sm font-semibold text-[var(--text-secondary)] tabular-nums whitespace-nowrap">
            {currentStep + 1} / {useCase.steps.length}
          </span>
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
      return step.message.slice(0, 20) + (step.message.length > 20 ? '...' : '')
    case 'merge':
      return `Merge → ${step.to}`
    case 'delete-branch':
      return `Delete ${step.branch}`
    case 'tag':
      return `Tag ${step.tag}`
    default:
      return step.message?.slice(0, 15) || ''
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

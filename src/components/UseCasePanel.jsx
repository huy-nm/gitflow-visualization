import GitFlowVisualizer from './GitFlowVisualizer'

function UseCasePanel({ useCase, currentStep, isPlaying, onPlayPause, onStepChange, onReset, onBack, onStepComplete }) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[var(--bg-card)] backdrop-blur-3xl rounded-[20px] border border-[var(--glass-border)] mb-4 mx-4 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
      
      {/* Main Content Area - Left Sidebar + Visualization */}
      <div className="flex-1 flex overflow-hidden mt-4">
        {/* Left Sidebar - Beginner-Friendly Explanation */}
        <div className="w-96 shrink-0 p-4 pt-6 pb-6 bg-white/80 dark:bg-ctp-mantle/80">
          <div className="h-full flex flex-col gap-5 p-5 bg-white dark:bg-ctp-base rounded-2xl border border-[var(--border-color)] shadow-lg overflow-y-auto">
            
            {/* 1. What's Happening */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-ctp-blue m-0">What's Happening</h3>
              </div>
              <p className="text-base leading-relaxed text-[var(--text-primary)] m-0 pl-8">
                {useCase.steps[currentStep]?.message}
              </p>
            </div>
            
            {/* Divider */}
            <hr className="border-0 h-px bg-[var(--border-color)] m-0" />
            
            {/* 2. The Command */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">💻</span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-ctp-green m-0">The Command</h3>
              </div>
              <div className="pl-8">
                <code className="font-mono text-sm text-ctp-green bg-ctp-green/10 px-4 py-3 rounded-xl border border-ctp-green/20 block leading-relaxed">
                  {getGitCommand(useCase.steps[currentStep])}
                </code>
              </div>
            </div>
            
            {/* Divider */}
            <hr className="border-0 h-px bg-[var(--border-color)] m-0" />
            
            {/* 3. Result */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-ctp-mauve m-0">Result</h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] m-0 pl-8">
                {getStepResult(useCase.steps[currentStep])}
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Right - Visualization with Top Timeline */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Visualization */}
          <div className="flex-1 flex flex-col overflow-hidden p-6 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]">
            {/* Timeline Bar - Controls + Horizontal Steps + Step Counter */}
            <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-white/80 dark:bg-ctp-mantle/80 border border-[var(--border-color)] rounded-2xl shadow-lg">
              {/* Playback Controls */}
              <div className="flex items-center gap-1 bg-white dark:bg-ctp-base p-1.5 rounded-full border border-[var(--border-color)] shadow-sm">
                <button 
                  className="w-10 h-10 border-none bg-transparent text-[var(--text-secondary)] cursor-pointer rounded-full text-lg flex items-center justify-center transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed" 
                  onClick={onReset} 
                  title="Reset"
                >
                  ⇤
                </button>
                <button 
                  className="w-10 h-10 border-none bg-transparent text-[var(--text-secondary)] cursor-pointer rounded-full text-lg flex items-center justify-center transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed" 
                  onClick={() => onStepChange(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  title="Previous"
                >
                  ❮
                </button>
                <button 
                  className={`w-10 h-10 border-none cursor-pointer rounded-full text-lg flex items-center justify-center transition-all ${isPlaying ? 'bg-ctp-peach/20 text-ctp-peach hover:bg-ctp-peach hover:text-ctp-base' : 'bg-ctp-blue/20 text-ctp-blue hover:bg-ctp-blue hover:text-ctp-base'}`}
                  onClick={onPlayPause}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <button 
                  className="w-10 h-10 border-none bg-transparent text-[var(--text-secondary)] cursor-pointer rounded-full text-lg flex items-center justify-center transition-all hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed" 
                  onClick={() => onStepChange(Math.min(useCase.steps.length - 1, currentStep + 1))}
                  disabled={currentStep === useCase.steps.length - 1}
                  title="Next"
                >
                  ❯
                </button>
              </div>
              
              {/* Horizontal Timeline */}
              <div className="flex-1 flex items-center gap-1 mx-2">
                {useCase.steps.map((step, index) => {
                  const isActive = index === currentStep
                  const isCompleted = index < currentStep
                  
                  return (
                    <button
                      key={index}
                      className="group relative flex-1 h-8 flex items-center justify-center p-0 border-none cursor-pointer bg-transparent"
                      onClick={() => onStepChange(index)}
                      title={`Step ${index + 1}: ${getShortLabel(step)}`}
                    >
                      {/* Progress bar segment */}
                      <div className={`
                        absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 rounded-full transition-all duration-300
                        ${isCompleted ? 'bg-ctp-green' : ''}
                        ${isActive ? 'bg-gradient-to-r from-ctp-blue to-ctp-mauve shadow-[0_0_8px_rgba(137,180,250,0.5)]' : ''}
                        ${index > currentStep ? 'bg-[var(--border-color)]' : ''}
                      `} />
                      
                      {/* Step indicator */}
                      <div className={`
                        relative z-10 flex items-center justify-center transition-all duration-300
                        ${isActive 
                          ? 'w-auto px-3 h-6 rounded-full bg-ctp-blue border-none shadow-[0_0_10px_rgba(137,180,250,0.6)]' 
                          : 'w-3 h-3 rounded-full border-2'
                        }
                        ${isCompleted ? 'bg-ctp-green border-ctp-green' : ''}
                        ${!isActive && !isCompleted ? 'bg-white dark:bg-ctp-base border-[var(--border-color)] group-hover:scale-125' : ''}
                      `}>
                        {isActive && (
                          <span className="text-xs font-bold text-white whitespace-nowrap leading-none">
                            {index + 1} / {useCase.steps.length}
                          </span>
                        )}
                      </div>
                      
                      {/* Tooltip on hover (skip for active step as it shows info) */}
                      {!isActive && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-2 bg-white dark:bg-ctp-base border border-[var(--border-color)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 text-xs pointer-events-none">
                          <div className="flex items-center gap-2">
                            <span>{getActionIcon(step.action)}</span>
                            <span className="font-medium text-[var(--text-primary)]">{getShortLabel(step)}</span>
                          </div>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-ctp-base border-l border-t border-[var(--border-color)] rotate-45 mb-[-5px]" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
            
            <GitFlowVisualizer 
              useCase={useCase}
              currentStep={currentStep}
              isPlaying={isPlaying}
              onStepComplete={onStepComplete}
            />
          </div>
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

function getStepResult(step) {
  switch (step.action) {
    case 'create-branch':
      return `You now have a separate workspace called "${step.to}". Any changes you make here won't affect other branches until you merge them.`
    case 'commit':
      return `Your changes are now saved as a permanent snapshot. Think of it like saving a checkpoint in a game - you can always come back to this point.`
    case 'merge':
      return `The code from "${step.from}" has been combined into "${step.to}". Both sets of changes now exist together in one place.`
    case 'delete-branch':
      return `The branch "${step.branch}" has been removed. This is like cleaning up after finishing a task - the work is done and merged, so we don't need this workspace anymore.`
    case 'tag':
      return `Version "${step.tag}" is now marked in history. This makes it easy to find and reference this exact point later, like putting a bookmark in a book.`
    default:
      return 'This step updates your repository.'
  }
}

export default UseCasePanel

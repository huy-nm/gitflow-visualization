
import GitFlowVisualizer from './GitFlowVisualizer'
import { useTranslation } from '../i18n'

function UseCasePanel({ useCase, currentStep, isPlaying, onPlayPause, onStepChange, onReset, onBack, onStepComplete }) {
  const { t } = useTranslation()
  
  // Get translated use case title and description
  const useCaseId = useCase.id.replace(/-/g, '').replace(/([A-Z])/g, (m) => m.toLowerCase())
  const translatedTitle = t(`useCases.${useCaseId}.title`) !== `useCases.${useCaseId}.title` 
    ? t(`useCases.${useCaseId}.title`) 
    : useCase.title
  const translatedDescription = t(`useCases.${useCaseId}.description`) !== `useCases.${useCaseId}.description`
    ? t(`useCases.${useCaseId}.description`)
    : useCase.description

  const stepProgress = ((currentStep + 1) / useCase.steps.length) * 100

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[var(--bg-card)] backdrop-blur-3xl rounded-[20px] border border-[var(--glass-border)] mb-4 mx-4 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header - Back + Title */}
      <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border-b border-[var(--border-color)]">
        <button 
          className="flex items-center justify-center w-8 h-8 text-[var(--text-secondary)] bg-transparent border border-[var(--border-color)] rounded-lg cursor-pointer transition-all hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)] hover:border-ctp-blue/50" 
          onClick={onBack}
          title={t('panel.backToUseCases')}
        >
          ←
        </button>
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl">{useCase.icon}</span>
          <div>
            <h2 className="text-lg font-bold m-0 bg-gradient-to-br from-ctp-blue to-ctp-mauve bg-clip-text text-transparent truncate leading-tight">
              {translatedTitle}
            </h2>
            <p className="text-xs text-[var(--text-muted)] m-0 truncate">{translatedDescription}</p>
          </div>
        </div>
      </div>
      
      {/* Main Content: Split Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT SIDEBAR - Information Stream */}
        <div className="w-[400px] shrink-0 flex flex-col border-r border-[var(--border-color)] bg-white/50 dark:bg-ctp-mantle/50 backdrop-blur-sm overflow-hidden">
          
          {/* Progress Indicator */}
          <div className="px-6 py-6 border-b border-[var(--border-color)] bg-[var(--bg-card)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                Step {currentStep + 1} of {useCase.steps.length}
              </span>
              <span className="text-xs font-mono text-[var(--text-secondary)] font-medium">
                {Math.round(stepProgress)}%
              </span>
            </div>
            <div className="h-1.5 w-full bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-ctp-blue to-ctp-mauve transition-all duration-500 ease-out rounded-full" 
                style={{width: `${stepProgress}%`}} 
              />
            </div>
          </div>

          {/* Content Scroll Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            
            {/* Section 1: Explanation */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-0">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-lg">💡</span>
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide">
                  {t('panel.whatsHappening')}
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-7 pl-8 border-l-2 border-ctp-blue/20">
                {useCase.steps[currentStep]?.message}
              </p>
            </div>

            {/* Section 2: Command */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-lg">⌨️</span>
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide">
                  {t('panel.theCommand')}
                </h3>
              </div>
              <div className="pl-8">
                <code className="block font-mono text-sm text-ctp-green bg-[var(--bg-tertiary)] px-4 py-3 rounded-xl border border-[var(--border-color)] shadow-sm">
                  {getGitCommand(useCase.steps[currentStep])}
                </code>
              </div>
            </div>

            {/* Section 3: Result */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-lg">📝</span>
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide">
                  {t('panel.result')}
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-7 pl-8 border-l-2 border-ctp-mauve/20">
                {getStepResult(useCase.steps[currentStep])}
              </p>
            </div>

            {/* Section 4: Verification (Conditional) */}
            {getVerificationInfo(useCase.steps[currentStep]) && (
              <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-lg">✅</span>
                  <h3 className="text-sm font-bold text-ctp-green uppercase tracking-wide">
                    Verify
                  </h3>
                </div>
                <div className="ml-8 p-4 rounded-xl bg-ctp-green/5 border border-ctp-green/10">
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                        Run:
                      </span>
                      <code className="font-mono text-xs text-[var(--text-primary)] bg-white/50 dark:bg-black/20 px-2 py-1 rounded inline-block">
                        {getVerificationInfo(useCase.steps[currentStep]).command}
                      </code>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                        Expect:
                      </span>
                      <span className="text-sm text-[var(--text-secondary)]">
                        {getVerificationInfo(useCase.steps[currentStep]).expectation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
        
        {/* RIGHT AREA - Visualization */}
        <div className="flex-1 flex flex-col relative bg-[radial-gradient(ellipse_at_top_right,var(--bg-tertiary),transparent_70%)]">
          
          {/* Floating Controls - Top Right */}
          <div className="absolute top-6 right-6 z-10 flex items-center gap-2 bg-[var(--bg-card)]/90 backdrop-blur-md p-1.5 rounded-full border border-[var(--border-color)] shadow-xl transition-all hover:shadow-2xl hover:scale-105">
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-30" 
              onClick={onReset} 
              title="Reset Flow"
            >
              ⟲
            </button>
            <div className="w-px h-4 bg-[var(--border-color)] mx-1" />
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-30" 
              onClick={() => onStepChange(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              title="Previous Step"
            >
              ❮
            </button>
            <button 
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md text-xl transition-all ${isPlaying ? 'bg-ctp-peach text-white shadow-ctp-peach/30' : 'bg-ctp-blue text-white shadow-ctp-blue/30'} hover:scale-110`}
              onClick={onPlayPause}
              title={isPlaying ? 'Pause' : 'Play Auto-Flow'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-30" 
              onClick={() => onStepChange(Math.min(useCase.steps.length - 1, currentStep + 1))}
              disabled={currentStep === useCase.steps.length - 1}
              title="Next Step"
            >
              ❯
            </button>
          </div>

          {/* Visualization Canvas */}
          <div className="flex-1 overflow-hidden relative">
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


export default UseCasePanel


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

function getVerificationInfo(step) {
  switch (step.action) {
    case 'create-branch':
      return {
        command: 'git branch',
        expectation: <>An asterisk (<span className="text-ctp-green font-bold">*</span>) next to your new branch name: <span className="text-ctp-green font-bold">* {step.to.split('/').pop()}</span></>
      }
    case 'commit':
      return {
        command: 'git log -1 --oneline',
        expectation: <>The latest commit message matching: "<span className="text-ctp-green font-bold">{step.message.split(':')[0]}</span>"</>
      }
    case 'merge':
      return {
        command: 'git log -1 --oneline',
        expectation: <>A merge commit message like: "<span className="text-ctp-green font-bold">Merge branch '{step.from}'</span>"</>
      }
    case 'delete-branch':
      return {
        command: 'git branch',
        expectation: <>The branch <span className="text-ctp-red font-bold">{step.branch}</span> should NO LONGER appear in the list.</>
      }
    case 'tag':
      return {
        command: 'git tag',
        expectation: <>The tag <span className="text-ctp-green font-bold">{step.tag}</span> should appear in the list.</>
      }
    default:
      return null
  }
}

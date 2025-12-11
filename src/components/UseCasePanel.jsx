import { useState } from 'react'
import GitFlowVisualizer from './GitFlowVisualizer'
import { useTranslation } from '../i18n'
import { 
  Lightbulb, 
  Keyboard, 
  NotePencil, 
  CheckCircle, 
  ArrowCounterClockwise, 
  CaretLeft, 
  Play, 
  Pause, 
  CaretRight, 
  Copy, 
  Check 
} from '@phosphor-icons/react'


function UseCasePanel({ useCase, currentStep, isPlaying, onPlayPause, onStepChange, onReset, onStepComplete }) {
  const { t } = useTranslation()
// ... (rest of UseCasePanel)

// ...

// Restore Usage of TerminalBlock in render:
// (I will do this in a separate chunk to be precise, or I can do it in one go if I identify the lines correctly.)

// Wait, replace_file_content cannot handle multiple non-contiguous chunks unless I use multi_replace.
// I will use multi_replace_file_content.
  
  const stepProgress = ((currentStep + 1) / useCase.steps.length) * 100

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[var(--bg-card)] backdrop-blur-3xl rounded-[20px] border border-[var(--glass-border)] mb-4 mx-4 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
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
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Section 1: Explanation */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-0">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={20} weight="fill" className="text-ctp-yellow" />
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide">
                  {t('panel.whatsHappening')}
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-7 pl-7 border-l-2 border-ctp-blue/20">
                {useCase.steps[currentStep]?.message}
              </p>
            </div>

            {/* Section 2: Command */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
              <div className="flex items-center gap-2 mb-2">
                <Keyboard size={20} weight="fill" className="text-[var(--text-secondary)]" />
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide">
                  {t('panel.theCommand')}
                </h3>
              </div>
              <div className="pl-7">
                <TerminalBlock command={getGitCommand(useCase.steps[currentStep])} />
              </div>
            </div>

            {/* Section 3: Result */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
              <div className="flex items-center gap-2 mb-2">
                <NotePencil size={20} weight="fill" className="text-ctp-blue" />
                <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide">
                  {t('panel.result')}
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-7 pl-7 border-l-2 border-ctp-mauve/20">
                {getStepResult(useCase.steps[currentStep])}
              </p>
            </div>

            {/* Section 4: Verification (Conditional) */}
            {getVerificationInfo(useCase.steps[currentStep]) && (
              <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={20} weight="fill" className="text-ctp-green" />
                  <h3 className="text-sm font-bold text-ctp-green uppercase tracking-wide">
                    Verify
                  </h3>
                </div>
                <div className="pl-7">
                  <TerminalBlock 
                    label="Run:"
                    command={getVerificationInfo(useCase.steps[currentStep]).command}
                  />
                  <div className="mt-2 p-2 rounded-lg bg-ctp-green/5 border border-ctp-green/10">
                    <span className="text-xs font-bold text-ctp-green uppercase tracking-wider block mb-1">
                      Expect:
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {getVerificationInfo(useCase.steps[currentStep]).expectation}
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
        
        {/* RIGHT AREA - Visualization */}
        <div className="flex-1 flex flex-col relative bg-[radial-gradient(ellipse_at_top_right,var(--bg-tertiary),transparent_70%)]">
          
          {/* Visualization Canvas */}
          <div className="flex-1 overflow-hidden relative">
            <GitFlowVisualizer 
              useCase={useCase}
              currentStep={currentStep}
              isPlaying={isPlaying}
              onStepComplete={onStepComplete}
            />
          </div>

          {/* Floating Controls - Bottom Center */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-[var(--bg-card)]/90 backdrop-blur-md p-1.5 rounded-full border border-[var(--border-color)] shadow-xl transition-all hover:shadow-2xl">
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-30" 
              onClick={onReset} 
              title="Reset Flow"
            >
              <ArrowCounterClockwise size={20} weight="bold" />
            </button>
            <div className="w-px h-4 bg-[var(--border-color)] mx-1" />
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-30" 
              onClick={() => onStepChange(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              title="Previous Step"
            >
              <CaretLeft size={24} weight="bold" />
            </button>
            <button 
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md text-xl transition-all ${isPlaying ? 'bg-ctp-peach text-white shadow-ctp-peach/30' : 'bg-ctp-blue text-white shadow-ctp-blue/30'} hover:scale-110`}
              onClick={onPlayPause}
              title={isPlaying ? 'Pause' : 'Play Auto-Flow'}
            >
              {isPlaying ? <Pause size={24} weight="fill" /> : <Play size={24} weight="fill" />}
            </button>
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-30" 
              onClick={() => onStepChange(Math.min(useCase.steps.length - 1, currentStep + 1))}
              disabled={currentStep === useCase.steps.length - 1}
              title="Next Step"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}


export default UseCasePanel


function getGitCommand(step) {
  // Extract commit message from step description (after the step number and emoji)
  const extractCommitMessage = (message) => {
    if (!message) return 'Update code'
    // Remove step number prefix like "🌱 Step 1: " or "💳 Step 2: "
    const cleanMessage = message.replace(/^[^\s]+\s+Step\s+\d+:\s*/i, '')
    // Truncate to reasonable length for commit message
    return cleanMessage.length > 50 ? cleanMessage.substring(0, 47) + '...' : cleanMessage
  }

  switch (step.action) {
    case 'create-branch':
      return `git checkout -b ${step.to}`
    case 'commit':
      return `git commit -m "${extractCommitMessage(step.message)}"`
    case 'merge':
      return `git merge ${step.from}`
    case 'delete-branch':
      return `git branch -d ${step.branch}`
    case 'tag':
      return `git tag ${step.tag}`
    case 'deploy':
      return `deploy --env ${step.environment} --ref ${step.branch}`
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
    case 'deploy':
      return `Your code from "${step.branch}" is now deployed to ${step.environment.toUpperCase()}. ${step.environment === 'production' ? 'Real users can now access these changes!' : 'QA team can now test these changes in a production-like environment.'}`
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

const TerminalBlock = ({ command, label }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!command) return
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy', err)
    }
  }

  return (
    <div className="group relative my-2">
      {label && (
        <label className="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5 ml-1">
          {label}
        </label>
      )}
      <div className="relative group/block">
        <div className="relative font-mono text-sm bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:border-ctp-blue/30 hover:shadow-md">
          {/* Header/Controls */}
          <div className="flex items-center justify-between px-4 py-3 pr-12">
            <code className="text-[var(--text-primary)] block overflow-x-auto scrollbar-none whitespace-pre-wrap break-all font-bold leading-relaxed tracking-tight">
              <span className="text-ctp-blue mr-2.5 select-none font-extrabold">$</span>
              {command || ''}
            </code>
          </div>
        </div>

        {/* Copy Button - Floating */}
        <button
          onClick={handleCopy}
          className="absolute top-1/2 -translate-y-1/2 right-2 p-2 rounded-lg bg-transparent text-[var(--text-secondary)] hover:text-ctp-blue hover:bg-ctp-blue/10 hover:scale-105 transition-all duration-200 cursor-pointer z-10"
          type="button"
          title="Copy"
        >
          {copied ? (
            <Check size={16} weight="bold" className="text-ctp-green animate-in zoom-in spin-in-90 duration-300" />
          ) : (
            <Copy size={16} weight="bold" />
          )}
        </button>
      </div>
    </div>
  )
}

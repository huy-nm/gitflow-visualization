
import { 
  Plant, 
  FloppyDisk, 
  ArrowUUpLeft, 
  ArrowsLeftRight, 
  GitPullRequest,
  ChatCircleDots,
  ArrowsSplit,
  ArrowsClockwise,
  Broom,
  Bug,
  Shield,
  Package,
  Rewind,
  GitMerge,
  Cherries,
  Calendar,
  Siren,
  Tag,
  Hourglass,
  TreeStructure,
  Rocket,
  Sparkle,
  Buildings,
  Flask,
  GitCommit,
  Question
} from '@phosphor-icons/react'

export const getUseCaseIcon = (id, category) => {
  // Map specific IDs to icons
  const idMap = {
    // Beginner
    'first-feature-branch': <Plant size={24} weight="fill" className="text-ctp-green" />,
    'save-your-work': <FloppyDisk size={24} weight="fill" className="text-ctp-blue" />,
    'undo-last-commit': <ArrowUUpLeft size={24} weight="fill" className="text-ctp-peach" />,
    'switch-between-tasks': <ArrowsLeftRight size={24} weight="fill" className="text-ctp-mauve" />,
    'first-pull-request': <GitPullRequest size={24} weight="fill" className="text-ctp-lavender" />,
    
    // Intermediate
    'code-review-cycle': <ChatCircleDots size={24} weight="fill" className="text-ctp-yellow" />,
    'parallel-work': <ArrowsSplit size={24} weight="fill" className="text-ctp-sky" />,
    'sync-with-team': <ArrowsClockwise size={24} weight="fill" className="text-ctp-sapphire" />,
    'feature-branch-cleanup': <Broom size={24} weight="fill" className="text-ctp-pink" />,
    'bug-found-in-pr': <Bug size={24} weight="fill" className="text-ctp-red" />,

    // Senior
    'branch-protection': <Shield size={24} weight="fill" className="text-ctp-green" />,
    'monorepo-release': <Package size={24} weight="fill" className="text-ctp-mauve" />,
    'rollback-strategy': <Rewind size={24} weight="fill" className="text-ctp-maroon" />,
    'rebase-vs-merge': <GitMerge size={24} weight="fill" className="text-ctp-teal" />,
    'cherry-pick-fix': <Cherries size={24} weight="fill" className="text-ctp-red" />,

    // Real World
    'sprint-development': <Calendar size={24} weight="fill" className="text-ctp-blue" />,
    'critical-hotfix': <Siren size={24} weight="fill" className="text-ctp-red" />,
    'release-candidate-flow': <Tag size={24} weight="fill" className="text-ctp-yellow" />,
    'long-running-feature': <Hourglass size={24} weight="fill" className="text-ctp-peach" />,
    'trunk-based-dev': <TreeStructure size={24} weight="fill" className="text-ctp-green" />,
    'staging-production-deploy': <Rocket size={24} weight="fill" className="text-ctp-mauve" />,
    'basic-ci': <GitCommit size={24} weight="fill" className="text-ctp-blue" />,
    'advanced-deployment': <Rocket size={24} weight="fill" className="text-ctp-red" />,
    'continuous-delivery': <Package size={24} weight="fill" className="text-ctp-yellow" />,
    'maintenance-and-automation': <Broom size={24} weight="fill" className="text-ctp-sky" />,
  }

  // Check ID map first
  if (idMap[id]) return idMap[id]

  // Fallback to category
  switch (category) {
    case 'beginner': return <Plant size={24} weight="fill" className="text-ctp-green" />
    case 'intermediate': return <Sparkle size={24} weight="fill" className="text-ctp-yellow" />
    case 'senior': return <Shield size={24} weight="fill" className="text-ctp-red" />
    case 'realWorld': return <Buildings size={24} weight="fill" className="text-ctp-mauve" />
    default: return <Question size={24} weight="fill" className="text-gray-400" />
  }
}

export default getUseCaseIcon

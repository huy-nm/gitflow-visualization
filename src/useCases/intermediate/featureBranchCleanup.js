// Intermediate: Feature Branch Cleanup
export const featureBranchCleanup = {
  id: 'feature-branch-cleanup',
  title: 'Feature Branch Cleanup',
  icon: '🧹',
  category: 'intermediate',
  description: 'Squash messy commits into clean history before merge',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/modal', message: 'Start modal component' },
    { action: 'commit', branch: 'feature/modal', message: 'wip modal' },
    { action: 'commit', branch: 'feature/modal', message: 'fix typo' },
    { action: 'commit', branch: 'feature/modal', message: 'more fixes' },
    { action: 'commit', branch: 'feature/modal', message: 'actually working now' },
    { action: 'commit', branch: 'feature/modal', message: 'final tweaks' },
    { action: 'commit', branch: 'feature/modal', message: 'Squash: git rebase -i HEAD~5' },
    { action: 'commit', branch: 'feature/modal', message: 'Clean: Add reusable modal component' },
    { action: 'merge', from: 'feature/modal', to: 'develop', message: 'Merge with clean history' },
    { action: 'delete-branch', branch: 'feature/modal', message: 'Clean up' }
  ]
}

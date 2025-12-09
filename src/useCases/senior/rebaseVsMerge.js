// Senior: Rebase vs Merge
export const rebaseVsMerge = {
  id: 'rebase-vs-merge',
  title: 'Rebase vs Merge',
  icon: '📏',
  category: 'senior',
  description: 'Use interactive rebase for clean, linear history',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/optimization', message: 'Start optimization work' },
    { action: 'commit', branch: 'feature/optimization', message: 'Optimize database queries' },
    { action: 'commit', branch: 'develop', message: 'Meanwhile: teammate merged feature' },
    { action: 'commit', branch: 'feature/optimization', message: 'Add caching layer' },
    { action: 'commit', branch: 'develop', message: 'Meanwhile: another feature merged' },
    { action: 'commit', branch: 'feature/optimization', message: 'Rebase: git rebase develop' },
    { action: 'commit', branch: 'feature/optimization', message: 'Resolve conflicts during rebase' },
    { action: 'commit', branch: 'feature/optimization', message: 'Now ahead of develop cleanly' },
    { action: 'merge', from: 'feature/optimization', to: 'develop', message: 'Fast-forward merge (clean history!)' },
    { action: 'delete-branch', branch: 'feature/optimization', message: 'Clean up' }
  ]
}

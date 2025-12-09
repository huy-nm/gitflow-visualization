// Intermediate: Sync with Team
export const syncWithTeam = {
  id: 'sync-with-team',
  title: 'Sync with Team',
  icon: '🤝',
  category: 'intermediate',
  description: 'Pull latest changes from develop and resolve conflicts',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/search', message: 'Start search feature' },
    { action: 'commit', branch: 'feature/search', message: 'Add search bar UI' },
    { action: 'commit', branch: 'develop', message: 'Teammate merged their changes' },
    { action: 'commit', branch: 'develop', message: 'Another teammate added utils' },
    { action: 'merge', from: 'develop', to: 'feature/search', message: 'Pull latest: git pull origin develop' },
    { action: 'commit', branch: 'feature/search', message: 'Resolve merge conflict in header.js' },
    { action: 'commit', branch: 'feature/search', message: 'Complete search logic' },
    { action: 'merge', from: 'feature/search', to: 'develop', message: 'Ready to merge - up to date!' },
    { action: 'delete-branch', branch: 'feature/search', message: 'Clean up' }
  ]
}

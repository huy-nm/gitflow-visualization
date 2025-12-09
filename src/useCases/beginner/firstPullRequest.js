// Beginner: Your First Pull Request
export const firstPullRequest = {
  id: 'first-pull-request',
  title: 'Your First Pull Request',
  icon: '📬',
  category: 'beginner',
  description: 'The complete workflow: branch → commits → PR → review → merge',
  steps: [
    { action: 'create-branch', from: 'main', to: 'feature/add-button', message: 'Create branch for your change' },
    { action: 'commit', branch: 'feature/add-button', message: 'Add new button component' },
    { action: 'commit', branch: 'feature/add-button', message: 'Add button styles' },
    { action: 'commit', branch: 'feature/add-button', message: 'Add button tests' },
    { action: 'commit', branch: 'feature/add-button', message: 'Open Pull Request for review' },
    { action: 'commit', branch: 'feature/add-button', message: 'Teammate approves: LGTM! ✅' },
    { action: 'merge', from: 'feature/add-button', to: 'main', message: 'PR merged! 🎉' },
    { action: 'delete-branch', branch: 'feature/add-button', message: 'GitHub auto-deletes branch' }
  ]
}

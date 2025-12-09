export const featureDevelopment = {
  id: 'basic-feature',
  title: 'Feature Development',
  icon: '🌟',
  description: 'Create a new feature branch from develop, work on it, and merge back',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/login', message: 'Create feature branch from develop' },
    { action: 'commit', branch: 'feature/login', message: 'Add login form UI' },
    { action: 'commit', branch: 'feature/login', message: 'Add authentication logic' },
    { action: 'commit', branch: 'feature/login', message: 'Add unit tests' },
    { action: 'merge', from: 'feature/login', to: 'develop', message: 'Merge feature into develop' },
    { action: 'delete-branch', branch: 'feature/login', message: 'Delete feature branch' }
  ]
}

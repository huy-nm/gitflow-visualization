export const parallelFeatures = {
  id: 'multiple-features',
  title: 'Parallel Features',
  icon: '🔀',
  description: 'Multiple developers working on different features simultaneously',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/dashboard', message: 'Dev A creates dashboard feature' },
    { action: 'create-branch', from: 'develop', to: 'feature/profile', message: 'Dev B creates profile feature' },
    { action: 'commit', branch: 'feature/dashboard', message: 'Add dashboard layout' },
    { action: 'commit', branch: 'feature/profile', message: 'Add profile page' },
    { action: 'commit', branch: 'feature/dashboard', message: 'Add charts and widgets' },
    { action: 'commit', branch: 'feature/profile', message: 'Add avatar upload' },
    { action: 'merge', from: 'feature/profile', to: 'develop', message: 'Merge profile feature first' },
    { action: 'merge', from: 'feature/dashboard', to: 'develop', message: 'Merge dashboard feature' },
    { action: 'delete-branch', branch: 'feature/profile', message: 'Clean up profile branch' },
    { action: 'delete-branch', branch: 'feature/dashboard', message: 'Clean up dashboard branch' }
  ]
}

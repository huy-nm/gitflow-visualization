// Beginner: First Feature Branch
export const firstFeatureBranch = {
  id: 'first-feature-branch',
  title: 'First Feature Branch',
  icon: '🌱',
  category: 'beginner',
  description: 'Learn the basics: create a branch, make changes, and merge back',
  steps: [
    { action: 'create-branch', from: 'main', to: 'feature/hello-world', message: 'Create your first feature branch from main' },
    { action: 'commit', branch: 'feature/hello-world', message: 'Add hello world message' },
    { action: 'merge', from: 'feature/hello-world', to: 'main', message: 'Merge your feature into main' },
    { action: 'delete-branch', branch: 'feature/hello-world', message: 'Clean up - delete the feature branch' }
  ]
}

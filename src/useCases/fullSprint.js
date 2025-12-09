export const fullSprint = {
  id: 'full-cycle',
  title: 'Full Sprint',
  icon: '🔄',
  description: 'A complete development cycle from features to release',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/api-v2', message: 'Start API v2 feature' },
    { action: 'commit', branch: 'feature/api-v2', message: 'Implement new endpoints' },
    { action: 'commit', branch: 'feature/api-v2', message: 'Add documentation' },
    { action: 'merge', from: 'feature/api-v2', to: 'develop', message: 'Complete API v2 feature' },
    { action: 'delete-branch', branch: 'feature/api-v2', message: 'Clean up feature branch' },
    { action: 'create-branch', from: 'develop', to: 'release/2.0', message: 'Start release 2.0' },
    { action: 'commit', branch: 'release/2.0', message: 'Prepare release notes' },
    { action: 'merge', from: 'release/2.0', to: 'main', message: 'Release to production' },
    { action: 'tag', branch: 'main', tag: 'v2.0.0', message: 'Tag version 2.0.0' },
    { action: 'merge', from: 'release/2.0', to: 'develop', message: 'Sync develop with release' },
    { action: 'delete-branch', branch: 'release/2.0', message: 'Clean up release branch' }
  ]
}

export const releaseProcess = {
  id: 'release',
  title: 'Release Process',
  icon: '🚀',
  description: 'Prepare a release branch, finalize, and merge to main and develop',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'release/1.0', message: 'Create release branch from develop' },
    { action: 'commit', branch: 'release/1.0', message: 'Bump version to 1.0.0' },
    { action: 'commit', branch: 'release/1.0', message: 'Update changelog' },
    { action: 'commit', branch: 'release/1.0', message: 'Fix minor bug found in QA' },
    { action: 'merge', from: 'release/1.0', to: 'main', message: 'Merge release into main' },
    { action: 'tag', branch: 'main', tag: 'v1.0.0', message: 'Tag release v1.0.0' },
    { action: 'merge', from: 'release/1.0', to: 'develop', message: 'Merge release back into develop' },
    { action: 'delete-branch', branch: 'release/1.0', message: 'Delete release branch' }
  ]
}

// Senior: Monorepo Release
export const monorepoRelease = {
  id: 'monorepo-release',
  title: 'Monorepo Release',
  icon: '📦',
  category: 'senior',
  description: 'Coordinate releases across multiple packages in a monorepo',
  steps: [
    { action: 'create-branch', from: 'main', to: 'release/q4-2024', message: 'Start Q4 coordinated release' },
    { action: 'commit', branch: 'release/q4-2024', message: 'Bump @myorg/core to 3.0.0' },
    { action: 'commit', branch: 'release/q4-2024', message: 'Bump @myorg/ui to 3.0.0' },
    { action: 'commit', branch: 'release/q4-2024', message: 'Bump @myorg/api to 3.0.0' },
    { action: 'commit', branch: 'release/q4-2024', message: 'Update cross-package dependencies' },
    { action: 'commit', branch: 'release/q4-2024', message: 'Generate changelogs for all packages' },
    { action: 'merge', from: 'release/q4-2024', to: 'main', message: 'Merge coordinated release' },
    { action: 'tag', branch: 'main', tag: 'v3.0.0', message: 'Tag monorepo release v3.0.0' },
    { action: 'commit', branch: 'main', message: 'Publish: npm publish --workspaces' },
    { action: 'merge', from: 'release/q4-2024', to: 'develop', message: 'Sync back to develop' },
    { action: 'delete-branch', branch: 'release/q4-2024', message: 'Clean up release branch' }
  ]
}

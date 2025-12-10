// Senior: Monorepo Release
export const monorepoRelease = {
  id: 'monorepo-release',
  title: 'Monorepo Release',
  icon: '📦',
  category: 'senior',
  description: 'Coordinate releases across multiple packages in a monorepo',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/q4-2024', 
      message: '📦 Step 1: Create release branch from DEVELOP' 
    },
    { 
      action: 'commit', 
      branch: 'release/q4-2024', 
      message: '⬆️ Step 2: Bump @myorg/core to 3.0.0' 
    },
    { 
      action: 'commit', 
      branch: 'release/q4-2024', 
      message: '⬆️ Step 3: Bump @myorg/ui to 3.0.0' 
    },
    { 
      action: 'commit', 
      branch: 'release/q4-2024', 
      message: '⬆️ Step 4: Bump @myorg/api to 3.0.0' 
    },
    { 
      action: 'commit', 
      branch: 'release/q4-2024', 
      message: '🔗 Step 5: Update cross-package dependencies' 
    },
    { 
      action: 'commit', 
      branch: 'release/q4-2024', 
      message: '📝 Step 6: Generate changelogs for all packages' 
    },
    { 
      action: 'merge', 
      from: 'release/q4-2024', 
      to: 'main', 
      message: '🚀 Step 7: Merge coordinated release to main' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v3.0.0', 
      message: '🏷️ Step 8: Tag monorepo release v3.0.0' 
    },
    { 
      action: 'commit', 
      branch: 'main', 
      message: '☁️ Step 9: Publish: npm publish --workspaces' 
    },
    { 
      action: 'merge', 
      from: 'release/q4-2024', 
      to: 'develop', 
      message: '🔄 Step 10: Sync version bumps back to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'release/q4-2024', 
      message: '🧹 Step 11: Cleanup release branch' 
    }
  ]
}

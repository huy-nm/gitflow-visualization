export const releaseProcess = {
  id: 'release',
  title: 'Release Process',
  icon: '🚀',
  description: 'Prepare a release branch, finalize, and merge to main and develop',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/1.0', 
      message: '📦 Step 1: Feature Freeze! Create release/1.0 from develop' 
    },
    { 
      action: 'commit', 
      branch: 'release/1.0', 
      message: '🔢 Step 2: Bump version to 1.0.0 (prepare for release)' 
    },
    { 
      action: 'commit', 
      branch: 'release/1.0', 
      message: '📝 Step 3: Update CHANGELOG.md' 
    },
    { 
      action: 'commit', 
      branch: 'release/1.0', 
      message: '🐛 Step 4: Fix minor bug found during final QA' 
    },
    { 
      action: 'merge', 
      from: 'release/1.0', 
      to: 'main', 
      message: '🚀 Step 5: Merge into main - Production Release!' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v1.0.0', 
      message: '🏷️ Step 6: Tag v1.0.0 - Golden copy' 
    },
    { 
      action: 'merge', 
      from: 'release/1.0', 
      to: 'develop', 
      message: '🔄 Step 7: Sync changes back to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'release/1.0', 
      message: '🧹 Step 8: Cleanup release branch' 
    }
  ]
}

export const fullSprint = {
  id: 'full-cycle',
  title: 'Full Sprint',
  icon: '🔄',
  description: 'A complete development cycle from features to release',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/api-v2', 
      message: '🌱 Step 1: Start Sprint Feature (API v2)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-v2', 
      message: '💻 Step 2: Implement endpoints' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-v2', 
      message: '📝 Step 3: Add Documentation' 
    },
    { 
      action: 'merge', 
      from: 'feature/api-v2', 
      to: 'develop', 
      message: '✅ Step 4: Feature Complete - Merge to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/api-v2', 
      message: '🧹 Step 5: Cleanup feature branch' 
    },
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/2.0', 
      message: '📦 Step 6: Prepare Release 2.0' 
    },
    { 
      action: 'commit', 
      branch: 'release/2.0', 
      message: '📝 Step 7: Finalize Release Notes' 
    },
    { 
      action: 'merge', 
      from: 'release/2.0', 
      to: 'main', 
      message: '🚀 Step 8: Deploy to Production' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v2.0.0', 
      message: '🏷️ Step 9: Tag v2.0.0' 
    },
    { 
      action: 'merge', 
      from: 'release/2.0', 
      to: 'develop', 
      message: '🔄 Step 10: Sync release back to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'release/2.0', 
      message: '🧹 Step 11: Cleanup release branch' 
    }
  ]
}

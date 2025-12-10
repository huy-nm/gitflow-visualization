// Trunk-Based Development - Modern approach with short-lived branches
export const trunkBasedDev = {
  id: 'trunk-based',
  title: 'Trunk-Based Development',
  icon: '🌲',
  category: 'realWorld',
  description: 'Modern approach: short-lived branches, frequent integration, daily deploys with feature flags',
  steps: [
    // Dev 1: Small PR, merged same day
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'feature/add-tooltip', 
      message: '🌱 Step 1: Dev 1 - Branch from MAIN (Trunk)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/add-tooltip', 
      message: '💻 Step 2: Add tiny tooltip' 
    },
    { 
      action: 'merge', 
      from: 'feature/add-tooltip', 
      to: 'main', 
      message: '🚀 Step 3: Quick Merge to Main!' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/add-tooltip', 
      message: '🧹 Step 4: Cleanup' 
    },
    
    // Dev 2: Another small change
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'feature/fix-typo', 
      message: '🌱 Step 5: Dev 2 - Branch from MAIN' 
    },
    { 
      action: 'commit', 
      branch: 'feature/fix-typo', 
      message: '💻 Step 6: Fix typo' 
    },
    { 
      action: 'merge', 
      from: 'feature/fix-typo', 
      to: 'main', 
      message: '🚀 Step 7: Another Quick Merge!' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/fix-typo', 
      message: '🧹 Step 8: Cleanup' 
    },
    
    // Dev 1: Behind a feature flag
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'feature/new-pricing', 
      message: '🌱 Step 9: Feature Flagged Work' 
    },
    { 
      action: 'commit', 
      branch: 'feature/new-pricing', 
      message: '🕵️ Step 10: Add code behind flag' 
    },
    { 
      action: 'merge', 
      from: 'feature/new-pricing', 
      to: 'main', 
      message: '🚀 Step 11: Merge Dark Feature' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/new-pricing', 
      message: '🧹 Step 12: Cleanup' 
    },
    
    // Deploy happens multiple times per day
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'deploy-1205', 
      message: '📦 Step 13: Auto-Deploy 12:05 PM' 
    },
    
    // Later: enable feature flag (no branch needed)
    { 
      action: 'commit', 
      branch: 'main', 
      message: '🔓 Step 14: Enable Feature (Config Change)' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'deploy-1430', 
      message: '📦 Step 15: Auto-Deploy 2:30 PM' 
    }
  ]
}

// Critical Production Hotfix - Urgent fix while feature work continues
export const criticalHotfix = {
  id: 'critical-hotfix',
  title: 'Critical Production Hotfix',
  icon: '🚨',
  category: 'realWorld',
  description: 'Production bug discovered - urgent fix needed while other feature work continues in parallel',
  steps: [
    // Normal development in progress
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/new-dashboard', 
      message: '🌱 Step 1: Routine work - Branch off develop' 
    },
    { 
      action: 'commit', 
      branch: 'feature/new-dashboard', 
      message: '💻 Step 2: Coding new dashboard...' 
    },
    
    // Production alert! Bug discovered
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'hotfix/payment-crash', 
      message: '🚨 Step 3: URGENT! Prod crashed. Branch off MAIN' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/payment-crash', 
      message: '🚑 Step 4: Fix null pointer exception' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/payment-crash', 
      message: '🧪 Step 5: Add safety checks' 
    },
    
    // Meanwhile, feature work continues
    { 
      action: 'commit', 
      branch: 'feature/new-dashboard', 
      message: '👥 Step 6: Meanwhile, feature team keeps coding' 
    },
    
    // Hotfix expedited review and deploy
    { 
      action: 'merge', 
      from: 'hotfix/payment-crash', 
      to: 'main', 
      message: '🚀 Step 7: Emergency Deploy to Main' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v2.0.1', 
      message: '🏷️ Step 8: Tag Hotfix v2.0.1' 
    },
    
    // Backport to develop to prevent regression
    { 
      action: 'merge', 
      from: 'hotfix/payment-crash', 
      to: 'develop', 
      message: '🔄 Step 9: CRITICAL: Backport fix to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'hotfix/payment-crash', 
      message: '🧹 Step 10: Cleanup hotfix' 
    },
    
    // Feature work continues and eventually merges
    { 
      action: 'commit', 
      branch: 'feature/new-dashboard', 
      message: '💻 Step 11: Finish dashboard feature' 
    },
    { 
      action: 'merge', 
      from: 'feature/new-dashboard', 
      to: 'develop', 
      message: '✅ Step 12: Merge feature (now has hotfix via develop)' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/new-dashboard', 
      message: '🧹 Step 13: Cleanup feature' 
    }
  ]
}

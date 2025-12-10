// Senior: Rollback Strategy
export const rollbackStrategy = {
  id: 'rollback-strategy',
  title: 'Rollback Strategy',
  icon: '⏪',
  category: 'senior',
  description: 'Production deploy failed - revert, analyze, and fix properly',
  steps: [
    { 
      action: 'merge', 
      from: 'feature/new-payment', 
      to: 'main', 
      message: '🚀 Step 1: Deploy new payment system (Bad deploy)' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v2.5.0', 
      message: '🏷️ Step 2: Release v2.5.0' 
    },
    { 
      action: 'commit', 
      branch: 'main', 
      message: '🚨 Step 3: ALERT: Error rate spiking 500%!' 
    },
    { 
      action: 'commit', 
      branch: 'main', 
      message: '↩️ Step 4: Revert: git revert HEAD (Quickest restore)' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v2.5.1', 
      message: '🏷️ Step 5: Emergency rollback v2.5.1' 
    },
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'fix/payment-analysis', 
      message: '🔎 Step 6: Create fix branch from main to investigate' 
    },
    { 
      action: 'commit', 
      branch: 'fix/payment-analysis', 
      message: '🐛 Step 7: Found: race condition in callback' 
    },
    { 
      action: 'commit', 
      branch: 'fix/payment-analysis', 
      message: '🔒 Step 8: Add mutex lock + integration tests' 
    },
    { 
      action: 'commit', 
      branch: 'fix/payment-analysis', 
      message: '🧪 Step 9: Test in staging environment ✅' 
    },
    { 
      action: 'merge', 
      from: 'fix/payment-analysis', 
      to: 'main', 
      message: '🚀 Step 10: Deploy fixed version' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v2.5.2', 
      message: '🏷️ Step 11: Stable release v2.5.2' 
    },
    { 
      action: 'merge', 
      from: 'fix/payment-analysis', 
      to: 'develop', 
      message: '🔄 Step 12: Sync fix to develop (Don\'t forget!)' 
    },
    { 
      action: 'delete-branch', 
      branch: 'fix/payment-analysis', 
      message: '🧹 Step 13: Clean up' 
    }
  ]
}

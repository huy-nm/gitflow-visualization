// Senior: Rollback Staging/Production Deployment
// Demonstrates how to rollback deployments to previous versions
export const rollbackDeployment = {
  id: 'rollback-deployment',
  title: 'Rollback Deployment',
  icon: '⏪',
  category: 'senior',
  description: 'Rollback staging or production to previous version when issues are detected',
  steps: [
    // =============================================================
    // PHASE 1: DEPLOY TO STAGING (Setup)
    // =============================================================
    { 
      action: 'merge', 
      from: 'feature/payment-v2', 
      to: 'develop', 
      message: '✅ Step 1: New payment feature merged to develop' 
    },
    { 
      action: 'deploy', 
      branch: 'develop', 
      environment: 'staging', 
      message: '🟡 Step 2: Deploy to STAGING for QA testing' 
    },

    // =============================================================
    // PHASE 2: BUG DETECTED - ROLLBACK STAGING (Core concept)
    // =============================================================
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '🚨 Step 3: ALERT! Critical bug found - 30% of payments failing!' 
    },
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '↩️ Step 4: git revert HEAD - Rollback problematic commit' 
    },
    { 
      action: 'deploy', 
      branch: 'develop', 
      environment: 'staging', 
      message: '🟡 Step 5: Re-deploy STAGING - System stable again' 
    },

    // =============================================================
    // PHASE 3: FIX AND RE-DEPLOY
    // =============================================================
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'fix/payment-bug', 
      message: '🔧 Step 6: Create fix branch' 
    },
    { 
      action: 'commit', 
      branch: 'fix/payment-bug', 
      message: '🐛 Step 7: Fix the race condition bug' 
    },
    { 
      action: 'merge', 
      from: 'fix/payment-bug', 
      to: 'develop', 
      message: '✅ Step 8: Merge fix to develop' 
    },
    { 
      action: 'deploy', 
      branch: 'develop', 
      environment: 'staging', 
      message: '🟡 Step 9: Deploy fixed version to STAGING - QA approved!' 
    },

    // =============================================================
    // PHASE 4: PRODUCTION DEPLOYMENT
    // =============================================================
    { 
      action: 'merge', 
      from: 'develop', 
      to: 'main', 
      message: '🎯 Step 10: Merge to main for production' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v2.0.1', 
      message: '🏷️ Step 11: Tag release v2.0.1' 
    },
    { 
      action: 'deploy', 
      branch: 'main', 
      environment: 'production', 
      message: '🟢 Step 12: Deploy v2.0.1 to PRODUCTION - Live!' 
    }
  ]
}

// Staging & Production Deployment - Deploy flow with environment labels
// This use case teaches junior developers the complete deployment pipeline:
// develop → staging (testing) → production (live users)
export const stagingProductionDeploy = {
  id: 'staging-production-deploy',
  title: 'Staging & Production Deploy',
  icon: '🚀',
  category: 'realWorld',
  description: 'Learn how code travels safely from development to live users through staging environment testing',
  steps: [
    // =============================================================
    // PHASE 1: FEATURE DEVELOPMENT
    // This is where developers write and test their code locally
    // =============================================================
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/new-checkout', 
      message: '👨‍💻 Step 1: Create a feature branch from "develop" - This isolates your work so you don\'t break anything while coding' 
    },
    { 
      action: 'commit', 
      branch: 'feature/new-checkout', 
      message: '💻 Step 2: Write your code and commit - Each commit saves a snapshot of your changes' 
    },
    { 
      action: 'commit', 
      branch: 'feature/new-checkout', 
      message: '✨ Step 3: Keep committing as you build - Small, frequent commits make it easier to find bugs later' 
    },
    { 
      action: 'merge', 
      from: 'feature/new-checkout', 
      to: 'develop', 
      message: '✅ Step 4: PR approved! Merge to "develop" - Other developers reviewed your code and it\'s ready for testing' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/new-checkout', 
      message: '🧹 Step 5: Delete feature branch - Keep the repo clean! The code is safe in "develop" now' 
    },
    
    // =============================================================
    // PHASE 2: STAGING DEPLOYMENT
    // Staging = Test server that looks like production but isn't live
    // This is where QA team tests before real users see it
    // =============================================================
    { 
      action: 'deploy', 
      branch: 'develop', 
      environment: 'staging', 
      message: '🟡 Step 6: DEPLOY to STAGING - Copying code to a test server where QA can test without affecting real users' 
    },
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '🔍 Step 7: QA team tests on staging - They check buttons work, pages load, no bugs appear...' 
    },
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '✅ Step 8: QA gives approval - "Looks good! Safe to release to real users!"' 
    },
    
    // =============================================================
    // PHASE 3: RELEASE PREPARATION  
    // Create a release branch = "final check" before going live
    // This captures the exact code version we want to release
    // =============================================================
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/1.5.0', 
      message: '📦 Step 9: Create release branch - Freeze the code! This exact version will go to production' 
    },
    { 
      action: 'commit', 
      branch: 'release/1.5.0', 
      message: '🔢 Step 10: Update version number - Users and devs can identify which version is deployed' 
    },
    { 
      action: 'merge', 
      from: 'release/1.5.0', 
      to: 'main', 
      message: '🎯 Step 11: Merge to "main" - The "main" branch always contains production-ready code' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v1.5.0', 
      message: '🏷️ Step 12: Create version tag - A permanent bookmark! You can always find this exact code later' 
    },
    
    // =============================================================
    // PHASE 4: PRODUCTION DEPLOYMENT
    // Production = The real, live application that users access
    // 🚨 This affects REAL USERS - always deploy during low-traffic times!
    // =============================================================
    { 
      action: 'deploy', 
      branch: 'main', 
      environment: 'production', 
      message: '🟢 Step 13: DEPLOY to PRODUCTION - The moment of truth! Your code is now LIVE for all users! 🎉' 
    },
    { 
      action: 'commit', 
      branch: 'main', 
      message: '✅ Step 14: Verify deployment - Check the live site, monitor for errors, watch user feedback' 
    },
    
    // =============================================================
    // PHASE 5: CLEANUP
    // Sync everything back and clean up temporary branches
    // =============================================================
    { 
      action: 'merge', 
      from: 'release/1.5.0', 
      to: 'develop', 
      message: '🔄 Step 15: Sync back to "develop" - Include any last-minute fixes made in the release branch' 
    },
    { 
      action: 'delete-branch', 
      branch: 'release/1.5.0', 
      message: '🧹 Step 16: Delete release branch - All done! The tag "v1.5.0" preserves this version forever' 
    }
  ]
}

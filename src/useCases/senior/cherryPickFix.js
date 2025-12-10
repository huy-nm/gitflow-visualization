// Senior: Cherry Pick Fix
export const cherryPickFix = {
  id: 'cherry-pick-fix',
  title: 'Cherry Pick Fix',
  icon: '🍒',
  category: 'senior',
  description: 'Apply a specific commit to multiple branches without full merge',
  steps: [
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '🐛 Step 1: We fixed a critical bug on develop' 
    },
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'hotfix/security-patch', 
      message: '🔥 Step 2: Create hotfix branch for Production' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/security-patch', 
      message: '🍒 Step 3: Cherry-pick the fix (git cherry-pick <commit-hash>)' 
    },
    { 
      action: 'merge', 
      from: 'hotfix/security-patch', 
      to: 'main', 
      message: '🚀 Step 4: Apply to main' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v2.1.1', 
      message: '🏷️ Step 5: Release v2.1.1' 
    },
    { 
      action: 'delete-branch', 
      branch: 'hotfix/security-patch', 
      message: '🧹 Step 6: Cleanup hotfix' 
    },
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'release/2.0', 
      message: '🕸️ Step 7: We also support older v2.0 version...' 
    },
    { 
      action: 'commit', 
      branch: 'release/2.0', 
      message: '🍒 Step 8: Cherry-pick the SAME fix to v2.0 branch' 
    },
    { 
      action: 'tag', 
      branch: 'release/2.0', 
      tag: 'v2.0.5', 
      message: '🏷️ Step 9: Release patched v2.0.5' 
    }
  ]
}

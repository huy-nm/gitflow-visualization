// Release Candidate Flow - QA iterations with bug fixes
export const releaseCandidateFlow = {
  id: 'release-candidate',
  title: 'Release Candidate Flow',
  icon: '🎯',
  description: 'QA testing release candidates, finding bugs, multiple RC iterations before final release',
  steps: [
    // Feature complete - start release process
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/3.0.0', 
      message: '📦 Step 1: Create release branch - Feature Freeze!' 
    },
    { 
      action: 'commit', 
      branch: 'release/3.0.0', 
      message: '1️⃣ Step 2: Bump version to 3.0.0-rc.1' 
    },
    { 
      action: 'tag', 
      branch: 'release/3.0.0', 
      tag: 'v3.0.0-rc.1', 
      message: '🏷️ Step 3: Tag RC1 for QA testing' 
    },
    
    // QA finds bugs in RC1
    { 
      action: 'commit', 
      branch: 'release/3.0.0', 
      message: '🐛 Step 4: Fix bug found by QA' 
    },
    { 
      action: 'commit', 
      branch: 'release/3.0.0', 
      message: '🐛 Step 5: Fix another timezone bug' 
    },
    
    // RC2 deployed
    { 
      action: 'commit', 
      branch: 'release/3.0.0', 
      message: '2️⃣ Step 6: Bump version to 3.0.0-rc.2' 
    },
    { 
      action: 'tag', 
      branch: 'release/3.0.0', 
      tag: 'v3.0.0-rc.2', 
      message: '🏷️ Step 7: Tag RC2 for regression testing' 
    },
    
    // One more bug found
    { 
      action: 'commit', 
      branch: 'release/3.0.0', 
      message: '🐛 Step 8: Fix edge case bug' 
    },
    { 
      action: 'commit', 
      branch: 'release/3.0.0', 
      message: '✨ Step 9: Final version bump to 3.0.0' 
    },
    
    // QA sign-off - release!
    { 
      action: 'merge', 
      from: 'release/3.0.0', 
      to: 'main', 
      message: '🚀 Step 10: QA Approved! Merge to main' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v3.0.0', 
      message: '🏷️ Step 11: Production Release v3.0.0' 
    },
    { 
      action: 'merge', 
      from: 'release/3.0.0', 
      to: 'develop', 
      message: '🔄 Step 12: Sync all fixes back to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'release/3.0.0', 
      message: '🧹 Step 13: Cleanup' 
    }
  ]
}

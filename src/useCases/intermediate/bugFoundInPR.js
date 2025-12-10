// Intermediate: Bug Found in PR
export const bugFoundInPR = {
  id: 'bug-found-in-pr',
  title: 'Bug Found in PR',
  icon: '🐛',
  category: 'intermediate',
  description: 'QA or reviewer finds a bug during PR - fix and update',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/checkout', 
      message: '🌱 Step 1: Start checkout feature' 
    },
    { 
      action: 'commit', 
      branch: 'feature/checkout', 
      message: '💻 Step 2: Add checkout page' 
    },
    { 
      action: 'commit', 
      branch: 'feature/checkout', 
      message: '💳 Step 3: Add payment form' 
    },
    { 
      action: 'commit', 
      branch: 'feature/checkout', 
      message: '📝 Step 4: Open PR - Ready for QA' 
    },
    { 
      action: 'commit', 
      branch: 'feature/checkout', 
      message: '🔎 Step 5: QA Testing... Found a bug! Tax calc is wrong' 
    },
    { 
      action: 'commit', 
      branch: 'feature/checkout', 
      message: '🐛 Step 6: Fix tax calculation bug' 
    },
    { 
      action: 'commit', 
      branch: 'feature/checkout', 
      message: '🧪 Step 7: Add tailored test to prevent regression' 
    },
    { 
      action: 'commit', 
      branch: 'feature/checkout', 
      message: '✅ Step 8: QA Verified - All good now' 
    },
    { 
      action: 'merge', 
      from: 'feature/checkout', 
      to: 'develop', 
      message: '🔀 Step 9: Merge fixed feature' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/checkout', 
      message: '🧹 Step 10: Cleanup' 
    }
  ]
}

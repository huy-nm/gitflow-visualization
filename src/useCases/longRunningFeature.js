// Long-Running Feature with Regular Sync - Large feature needing develop updates
export const longRunningFeature = {
  id: 'long-running-feature',
  title: 'Long-Running Feature Sync',
  icon: '🔄',
  category: 'realWorld',
  description: 'Large feature taking 3+ weeks - must sync with develop regularly to avoid merge conflicts',
  steps: [
    // Start major refactor
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/redesign-checkout', 
      message: '🌱 Step 1: Start 3-week Feature (Checkout Redesign)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/redesign-checkout', 
      message: '💻 Step 2: Week 1 work...' 
    },
    { 
      action: 'commit', 
      branch: 'feature/redesign-checkout', 
      message: '💻 Step 3: More Week 1 work...' 
    },
    
    // Meanwhile, other work lands on develop
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '👥 Step 4: Other team updates develop' 
    },
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '👥 Step 5: More updates on develop' 
    },
    
    // Week 2: Sync with develop to get latest changes
    { 
      action: 'merge', 
      from: 'develop', 
      to: 'feature/redesign-checkout', 
      message: '🔄 Step 6: SYNC! Pull develop into feature (Avoid conflicts!)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/redesign-checkout', 
      message: '🛠️ Step 7: Resolve any sync conflicts' 
    },
    { 
      action: 'commit', 
      branch: 'feature/redesign-checkout', 
      message: '💻 Step 8: Week 2 work continues...' 
    },
    
    // More work lands on develop
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '👥 Step 9: Develop moves forward again' 
    },
    
    // Week 3: Final sync and complete
    { 
      action: 'merge', 
      from: 'develop', 
      to: 'feature/redesign-checkout', 
      message: '🔄 Step 10: Final Sync before merge' 
    },
    { 
      action: 'commit', 
      branch: 'feature/redesign-checkout', 
      message: '💻 Step 11: Week 3 - Final polish' 
    },
    { 
      action: 'commit', 
      branch: 'feature/redesign-checkout', 
      message: '🧪 Step 12: E2E Tests' 
    },
    
    // Feature complete, merge back
    { 
      action: 'merge', 
      from: 'feature/redesign-checkout', 
      to: 'develop', 
      message: '✅ Step 13: Merge huge feature back to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/redesign-checkout', 
      message: '🧹 Step 14: Cleanup' 
    }
  ]
}

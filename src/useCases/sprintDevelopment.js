// Sprint Development Cycle - Multiple developers, code review, integration
export const sprintDevelopment = {
  id: 'sprint-development',
  title: 'Sprint Development Cycle',
  icon: '🏃',
  description: 'A complete 2-week sprint with multiple developers working on features, code reviews, and integration',
  steps: [
    // Sprint kickoff - two developers start their features
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/user-auth', 
      message: '🌱 Step 1: Dev A starts user-auth' 
    },
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/payment-api', 
      message: '🌱 Step 2: Dev B starts payment-api' 
    },
    
    // Initial development
    { 
      action: 'commit', 
      branch: 'feature/user-auth', 
      message: '💻 Step 3: Dev A: Auth setup' 
    },
    { 
      action: 'commit', 
      branch: 'feature/payment-api', 
      message: '💻 Step 4: Dev B: Stripe integration' 
    },
    
    // Continue parallel work
    { 
      action: 'commit', 
      branch: 'feature/user-auth', 
      message: '💻 Step 5: Dev A: Login endpoints' 
    },
    { 
      action: 'commit', 
      branch: 'feature/payment-api', 
      message: '💻 Step 6: Dev B: Payment handler' 
    },
    
    // Code review feedback
    { 
      action: 'commit', 
      branch: 'feature/user-auth', 
      message: '👀 Step 7: Dev A fixes PR comments' 
    },
    { 
      action: 'commit', 
      branch: 'feature/payment-api', 
      message: '👀 Step 8: Dev B fixes PR comments' 
    },
    
    // First feature merged after approval
    { 
      action: 'merge', 
      from: 'feature/user-auth', 
      to: 'develop', 
      message: '✅ Step 9: Auth Feature Merged!' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/user-auth', 
      message: '🧹 Step 10: Cleanup Auth branch' 
    },
    
    // Second feature merged
    { 
      action: 'merge', 
      from: 'feature/payment-api', 
      to: 'develop', 
      message: '✅ Step 11: Payment Feature Merged!' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/payment-api', 
      message: '🧹 Step 12: Cleanup Payment branch' 
    },
    
    // Sprint release preparation
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/2.1.0', 
      message: '📦 Step 13: Sprint Over - Create Release' 
    },
    { 
      action: 'commit', 
      branch: 'release/2.1.0', 
      message: '🔢 Step 14: Bump version to 2.1.0' 
    },
    { 
      action: 'merge', 
      from: 'release/2.1.0', 
      to: 'main', 
      message: '🚀 Step 15: Deploy Sprint 2.1.0 to Prod' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v2.1.0', 
      message: '🏷️ Step 16: Tag Release v2.1.0' 
    },
    { 
      action: 'merge', 
      from: 'release/2.1.0', 
      to: 'develop', 
      message: '🔄 Step 17: Sync release info to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'release/2.1.0', 
      message: '🧹 Step 18: Final Cleanup' 
    }
  ]
}

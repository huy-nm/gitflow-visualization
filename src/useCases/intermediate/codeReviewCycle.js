// Intermediate: Code Review Cycle
export const codeReviewCycle = {
  id: 'code-review-cycle',
  title: 'Code Review Cycle',
  icon: '👀',
  category: 'intermediate',
  description: 'Address PR feedback with additional commits until approved',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/api-client', 
      message: '🌱 Step 1: Create feature branch' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-client', 
      message: '💻 Step 2: Implementation complete' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-client', 
      message: '📝 Step 3: Open Pull Request (PR) - Requesting review' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-client', 
      message: '💬 Step 4: Review received - "Please add error handling"' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-client', 
      message: '🔧 Step 5: Fix - Added error handling' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-client', 
      message: '💬 Step 6: Review received - "Needs JSDoc comments"' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-client', 
      message: '📚 Step 7: Fix - Added documentation' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-client', 
      message: '✅ Step 8: Approved! PR gets the green light' 
    },
    { 
      action: 'merge', 
      from: 'feature/api-client', 
      to: 'develop', 
      message: '🔀 Step 9: Merge to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/api-client', 
      message: '🧹 Step 10: Cleanup' 
    }
  ]
}

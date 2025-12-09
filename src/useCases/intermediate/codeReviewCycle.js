// Intermediate: Code Review Cycle
export const codeReviewCycle = {
  id: 'code-review-cycle',
  title: 'Code Review Cycle',
  icon: '👀',
  category: 'intermediate',
  description: 'Address PR feedback with additional commits until approved',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/api-client', message: 'Start API client feature' },
    { action: 'commit', branch: 'feature/api-client', message: 'Initial API client implementation' },
    { action: 'commit', branch: 'feature/api-client', message: 'Open PR for review' },
    { action: 'commit', branch: 'feature/api-client', message: 'Review: Add error handling' },
    { action: 'commit', branch: 'feature/api-client', message: 'Review: Add retry logic' },
    { action: 'commit', branch: 'feature/api-client', message: 'Review: Add JSDoc comments' },
    { action: 'commit', branch: 'feature/api-client', message: 'Approved! ✅ Ready to merge' },
    { action: 'merge', from: 'feature/api-client', to: 'develop', message: 'Merge after 3 rounds of review' },
    { action: 'delete-branch', branch: 'feature/api-client', message: 'Clean up' }
  ]
}

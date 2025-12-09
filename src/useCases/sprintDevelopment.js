// Sprint Development Cycle - Multiple developers, code review, integration
export const sprintDevelopment = {
  id: 'sprint-development',
  title: 'Sprint Development Cycle',
  icon: '🏃',
  description: 'A complete 2-week sprint with multiple developers working on features, code reviews, and integration',
  steps: [
    // Sprint kickoff - two developers start their features
    { action: 'create-branch', from: 'develop', to: 'feature/user-auth', message: 'Dev A starts user authentication feature' },
    { action: 'create-branch', from: 'develop', to: 'feature/payment-api', message: 'Dev B starts payment API integration' },
    
    // Initial development
    { action: 'commit', branch: 'feature/user-auth', message: 'Add OAuth2 provider setup' },
    { action: 'commit', branch: 'feature/payment-api', message: 'Add Stripe SDK integration' },
    
    // Continue parallel work
    { action: 'commit', branch: 'feature/user-auth', message: 'Implement login/logout endpoints' },
    { action: 'commit', branch: 'feature/payment-api', message: 'Create payment intent handler' },
    
    // Code review feedback
    { action: 'commit', branch: 'feature/user-auth', message: 'Address PR review: add rate limiting' },
    { action: 'commit', branch: 'feature/payment-api', message: 'Address PR review: add idempotency keys' },
    
    // First feature merged after approval
    { action: 'merge', from: 'feature/user-auth', to: 'develop', message: 'PR #42 merged: User Authentication' },
    { action: 'delete-branch', branch: 'feature/user-auth', message: 'Clean up merged feature branch' },
    
    // Second feature merged
    { action: 'merge', from: 'feature/payment-api', to: 'develop', message: 'PR #43 merged: Payment API' },
    { action: 'delete-branch', branch: 'feature/payment-api', message: 'Clean up merged feature branch' },
    
    // Sprint release preparation
    { action: 'create-branch', from: 'develop', to: 'release/2.1.0', message: 'Create sprint release branch' },
    { action: 'commit', branch: 'release/2.1.0', message: 'Bump version to 2.1.0' },
    { action: 'merge', from: 'release/2.1.0', to: 'main', message: 'Release v2.1.0 to production' },
    { action: 'tag', branch: 'main', tag: 'v2.1.0', message: 'Tag release v2.1.0' },
    { action: 'merge', from: 'release/2.1.0', to: 'develop', message: 'Sync release changes back to develop' },
    { action: 'delete-branch', branch: 'release/2.1.0', message: 'Clean up release branch' }
  ]
}

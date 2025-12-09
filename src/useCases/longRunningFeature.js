// Long-Running Feature with Regular Sync - Large feature needing develop updates
export const longRunningFeature = {
  id: 'long-running-feature',
  title: 'Long-Running Feature Sync',
  icon: '🔄',
  description: 'Large feature taking 3+ weeks - must sync with develop regularly to avoid merge conflicts',
  steps: [
    // Start major refactor
    { action: 'create-branch', from: 'develop', to: 'feature/redesign-checkout', message: 'Start major checkout redesign (3 week estimate)' },
    { action: 'commit', branch: 'feature/redesign-checkout', message: 'Week 1: Create new checkout components' },
    { action: 'commit', branch: 'feature/redesign-checkout', message: 'Week 1: Add cart summary widget' },
    
    // Meanwhile, other work lands on develop
    { action: 'commit', branch: 'develop', message: 'Other team: fix header alignment' },
    { action: 'commit', branch: 'develop', message: 'Other team: add A/B test framework' },
    
    // Week 2: Sync with develop to get latest changes
    { action: 'merge', from: 'develop', to: 'feature/redesign-checkout', message: 'Sync: pull latest develop into feature' },
    { action: 'commit', branch: 'feature/redesign-checkout', message: 'Week 2: Resolve minor merge conflicts' },
    { action: 'commit', branch: 'feature/redesign-checkout', message: 'Week 2: Add payment method selection' },
    
    // More work lands on develop
    { action: 'commit', branch: 'develop', message: 'Other team: update API client library' },
    
    // Week 3: Final sync and complete
    { action: 'merge', from: 'develop', to: 'feature/redesign-checkout', message: 'Final sync before completion' },
    { action: 'commit', branch: 'feature/redesign-checkout', message: 'Week 3: Complete order confirmation flow' },
    { action: 'commit', branch: 'feature/redesign-checkout', message: 'Week 3: Add E2E tests' },
    
    // Feature complete, merge back
    { action: 'merge', from: 'feature/redesign-checkout', to: 'develop', message: 'Merge: checkout redesign complete!' },
    { action: 'delete-branch', branch: 'feature/redesign-checkout', message: 'Clean up feature branch' }
  ]
}

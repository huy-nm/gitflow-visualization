// Trunk-Based Development - Modern approach with short-lived branches
export const trunkBasedDev = {
  id: 'trunk-based',
  title: 'Trunk-Based Development',
  icon: '🌲',
  description: 'Modern approach: short-lived branches, frequent integration, daily deploys with feature flags',
  steps: [
    // Dev 1: Small PR, merged same day
    { action: 'create-branch', from: 'main', to: 'feature/add-tooltip', message: 'Dev 1: Small tooltip feature' },
    { action: 'commit', branch: 'feature/add-tooltip', message: 'Add tooltip to help icon' },
    { action: 'merge', from: 'feature/add-tooltip', to: 'main', message: 'PR merged (< 1 hour turnaround)' },
    { action: 'delete-branch', branch: 'feature/add-tooltip', message: 'Immediate cleanup' },
    
    // Dev 2: Another small change
    { action: 'create-branch', from: 'main', to: 'feature/fix-typo', message: 'Dev 2: Quick typo fix' },
    { action: 'commit', branch: 'feature/fix-typo', message: 'Fix typo in error message' },
    { action: 'merge', from: 'feature/fix-typo', to: 'main', message: 'PR merged (reviewed by bot + human)' },
    { action: 'delete-branch', branch: 'feature/fix-typo', message: 'Immediate cleanup' },
    
    // Dev 1: Behind a feature flag
    { action: 'create-branch', from: 'main', to: 'feature/new-pricing', message: 'Dev 1: New pricing (behind flag)' },
    { action: 'commit', branch: 'feature/new-pricing', message: 'Add pricing page (feature flag: off)' },
    { action: 'merge', from: 'feature/new-pricing', to: 'main', message: 'Merge to main (flag still off)' },
    { action: 'delete-branch', branch: 'feature/new-pricing', message: 'Merged but not visible to users' },
    
    // Deploy happens multiple times per day
    { action: 'tag', branch: 'main', tag: 'deploy-1205', message: 'Continuous deployment (12:05 PM)' },
    
    // Later: enable feature flag (no branch needed)
    { action: 'commit', branch: 'main', message: 'Enable new pricing feature flag for 10% users' },
    { action: 'tag', branch: 'main', tag: 'deploy-1430', message: 'Continuous deployment (2:30 PM)' }
  ]
}

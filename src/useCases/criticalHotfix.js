// Critical Production Hotfix - Urgent fix while feature work continues
export const criticalHotfix = {
  id: 'critical-hotfix',
  title: 'Critical Production Hotfix',
  icon: '🚨',
  description: 'Production bug discovered - urgent fix needed while other feature work continues in parallel',
  steps: [
    // Normal development in progress
    { action: 'create-branch', from: 'develop', to: 'feature/new-dashboard', message: 'Dev starts working on new dashboard' },
    { action: 'commit', branch: 'feature/new-dashboard', message: 'Add dashboard layout components' },
    
    // Production alert! Bug discovered
    { action: 'create-branch', from: 'main', to: 'hotfix/payment-crash', message: '🚨 URGENT: Payment crash in production!' },
    { action: 'commit', branch: 'hotfix/payment-crash', message: 'Fix null pointer in payment callback' },
    { action: 'commit', branch: 'hotfix/payment-crash', message: 'Add defensive null checks' },
    
    // Meanwhile, feature work continues
    { action: 'commit', branch: 'feature/new-dashboard', message: 'Add chart widgets (unaware of hotfix)' },
    
    // Hotfix expedited review and deploy
    { action: 'merge', from: 'hotfix/payment-crash', to: 'main', message: 'Emergency merge to main - expedited review' },
    { action: 'tag', branch: 'main', tag: 'v2.0.1', message: 'Hotfix release v2.0.1' },
    
    // Backport to develop to prevent regression
    { action: 'merge', from: 'hotfix/payment-crash', to: 'develop', message: 'Backport hotfix to develop' },
    { action: 'delete-branch', branch: 'hotfix/payment-crash', message: 'Hotfix complete, cleanup' },
    
    // Feature work continues and eventually merges
    { action: 'commit', branch: 'feature/new-dashboard', message: 'Complete dashboard feature' },
    { action: 'merge', from: 'feature/new-dashboard', to: 'develop', message: 'Merge dashboard (includes hotfix now)' },
    { action: 'delete-branch', branch: 'feature/new-dashboard', message: 'Clean up feature branch' }
  ]
}

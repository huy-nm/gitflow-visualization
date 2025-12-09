// Senior: Rollback Strategy
export const rollbackStrategy = {
  id: 'rollback-strategy',
  title: 'Rollback Strategy',
  icon: '⏪',
  category: 'senior',
  description: 'Production deploy failed - revert, analyze, and fix properly',
  steps: [
    { action: 'merge', from: 'feature/new-payment', to: 'main', message: 'Deploy new payment system' },
    { action: 'tag', branch: 'main', tag: 'v2.5.0', message: 'Release v2.5.0' },
    { action: 'commit', branch: 'main', message: '🚨 ALERT: Error rate spiking 500%!' },
    { action: 'commit', branch: 'main', message: 'Revert: git revert HEAD~1' },
    { action: 'tag', branch: 'main', tag: 'v2.5.1', message: 'Emergency rollback v2.5.1' },
    { action: 'create-branch', from: 'main', to: 'fix/payment-analysis', message: 'Analyze what went wrong' },
    { action: 'commit', branch: 'fix/payment-analysis', message: 'Found: race condition in callback' },
    { action: 'commit', branch: 'fix/payment-analysis', message: 'Add mutex lock + integration tests' },
    { action: 'commit', branch: 'fix/payment-analysis', message: 'Test in staging environment ✅' },
    { action: 'merge', from: 'fix/payment-analysis', to: 'main', message: 'Deploy fixed version' },
    { action: 'tag', branch: 'main', tag: 'v2.5.2', message: 'Stable release v2.5.2' },
    { action: 'delete-branch', branch: 'fix/payment-analysis', message: 'Clean up' }
  ]
}

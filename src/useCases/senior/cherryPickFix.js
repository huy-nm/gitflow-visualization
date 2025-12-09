// Senior: Cherry Pick Fix
export const cherryPickFix = {
  id: 'cherry-pick-fix',
  title: 'Cherry Pick Fix',
  icon: '🍒',
  category: 'senior',
  description: 'Apply a specific commit to multiple branches without full merge',
  steps: [
    { action: 'commit', branch: 'develop', message: 'Fix: critical security vulnerability' },
    { action: 'create-branch', from: 'main', to: 'hotfix/security-patch', message: 'Need this fix on main too' },
    { action: 'commit', branch: 'hotfix/security-patch', message: 'Cherry-pick: git cherry-pick abc123' },
    { action: 'merge', from: 'hotfix/security-patch', to: 'main', message: 'Apply security fix to main' },
    { action: 'tag', branch: 'main', tag: 'v2.1.1', message: 'Security patch release' },
    { action: 'delete-branch', branch: 'hotfix/security-patch', message: 'Clean up' },
    { action: 'create-branch', from: 'main', to: 'release/2.0', message: 'Also need on release/2.0 branch' },
    { action: 'commit', branch: 'release/2.0', message: 'Cherry-pick same fix to release branch' },
    { action: 'tag', branch: 'release/2.0', tag: 'v2.0.5', message: 'Backport security patch' }
  ]
}

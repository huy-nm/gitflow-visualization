export const hotfixWorkflow = {
  id: 'hotfix',
  title: 'Hotfix Workflow',
  icon: '🔥',
  description: 'Fix a critical bug in production immediately',
  steps: [
    { action: 'create-branch', from: 'main', to: 'hotfix/security-patch', message: 'Create hotfix branch from main' },
    { action: 'commit', branch: 'hotfix/security-patch', message: 'Fix critical security vulnerability' },
    { action: 'commit', branch: 'hotfix/security-patch', message: 'Add regression tests' },
    { action: 'merge', from: 'hotfix/security-patch', to: 'main', message: 'Merge hotfix into main' },
    { action: 'tag', branch: 'main', tag: 'v1.0.1', message: 'Tag hotfix release v1.0.1' },
    { action: 'merge', from: 'hotfix/security-patch', to: 'develop', message: 'Merge hotfix into develop' },
    { action: 'delete-branch', branch: 'hotfix/security-patch', message: 'Delete hotfix branch' }
  ]
}

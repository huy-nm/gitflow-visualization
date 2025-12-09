// Senior: Branch Protection Rules
export const branchProtection = {
  id: 'branch-protection',
  title: 'Branch Protection',
  icon: '🛡️',
  category: 'senior',
  description: 'Enforce code quality with protected branches and required reviews',
  steps: [
    { action: 'create-branch', from: 'main', to: 'feature/urgent-fix', message: 'Developer tries direct push...' },
    { action: 'commit', branch: 'feature/urgent-fix', message: '❌ Direct push to main BLOCKED' },
    { action: 'commit', branch: 'feature/urgent-fix', message: 'Must use pull request workflow' },
    { action: 'commit', branch: 'feature/urgent-fix', message: 'PR created, waiting for review' },
    { action: 'commit', branch: 'feature/urgent-fix', message: 'CI pipeline running... ✅ passed' },
    { action: 'commit', branch: 'feature/urgent-fix', message: 'Review 1/2: Sarah approved ✅' },
    { action: 'commit', branch: 'feature/urgent-fix', message: 'Review 2/2: Mike approved ✅' },
    { action: 'merge', from: 'feature/urgent-fix', to: 'main', message: 'All checks passed - merge allowed' },
    { action: 'tag', branch: 'main', tag: 'v1.2.3', message: 'Quality-assured release' },
    { action: 'delete-branch', branch: 'feature/urgent-fix', message: 'Auto-delete after merge' }
  ]
}

// Intermediate: Bug Found in PR
export const bugFoundInPR = {
  id: 'bug-found-in-pr',
  title: 'Bug Found in PR',
  icon: '🐛',
  category: 'intermediate',
  description: 'QA or reviewer finds a bug during PR - fix and update',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/checkout', message: 'Implement checkout flow' },
    { action: 'commit', branch: 'feature/checkout', message: 'Add checkout page' },
    { action: 'commit', branch: 'feature/checkout', message: 'Add payment form' },
    { action: 'commit', branch: 'feature/checkout', message: 'PR opened for review' },
    { action: 'commit', branch: 'feature/checkout', message: '🐛 QA: "Tax calculation is wrong"' },
    { action: 'commit', branch: 'feature/checkout', message: 'Fix tax calculation bug' },
    { action: 'commit', branch: 'feature/checkout', message: 'Add test for tax calculation' },
    { action: 'commit', branch: 'feature/checkout', message: 'QA: Verified ✅' },
    { action: 'merge', from: 'feature/checkout', to: 'develop', message: 'Merge with bug fixed' },
    { action: 'delete-branch', branch: 'feature/checkout', message: 'Clean up' }
  ]
}

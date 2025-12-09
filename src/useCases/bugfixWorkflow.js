export const bugfixWorkflow = {
  id: 'bugfix-develop',
  title: 'Bugfix',
  icon: '🐛',
  description: 'Fix a bug discovered during development phase',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'bugfix/form-validation', message: 'Create bugfix branch' },
    { action: 'commit', branch: 'bugfix/form-validation', message: 'Fix email validation regex' },
    { action: 'commit', branch: 'bugfix/form-validation', message: 'Add test cases for edge cases' },
    { action: 'merge', from: 'bugfix/form-validation', to: 'develop', message: 'Merge bugfix into develop' },
    { action: 'delete-branch', branch: 'bugfix/form-validation', message: 'Delete bugfix branch' }
  ]
}

// Beginner: Save Your Work
export const saveYourWork = {
  id: 'save-your-work',
  title: 'Save Your Work',
  icon: '💾',
  category: 'beginner',
  description: 'Make multiple commits to save your progress as you work',
  steps: [
    { action: 'create-branch', from: 'main', to: 'feature/user-profile', message: 'Start working on user profile' },
    { action: 'commit', branch: 'feature/user-profile', message: 'Add profile page layout' },
    { action: 'commit', branch: 'feature/user-profile', message: 'Add user avatar section' },
    { action: 'commit', branch: 'feature/user-profile', message: 'Add bio text field' },
    { action: 'commit', branch: 'feature/user-profile', message: 'Add save button' },
    { action: 'merge', from: 'feature/user-profile', to: 'main', message: 'Feature complete - merge to main' },
    { action: 'delete-branch', branch: 'feature/user-profile', message: 'Clean up feature branch' }
  ]
}

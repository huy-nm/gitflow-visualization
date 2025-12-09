// Beginner: Switch Between Tasks
export const switchBetweenTasks = {
  id: 'switch-between-tasks',
  title: 'Switch Between Tasks',
  icon: '🔀',
  category: 'beginner',
  description: 'Learn to work on multiple things by switching branches',
  steps: [
    { action: 'create-branch', from: 'main', to: 'feature/navbar', message: 'Start working on navbar' },
    { action: 'commit', branch: 'feature/navbar', message: 'Add navbar component' },
    { action: 'create-branch', from: 'main', to: 'feature/footer', message: 'Urgent: switch to footer task' },
    { action: 'commit', branch: 'feature/footer', message: 'Add footer component' },
    { action: 'merge', from: 'feature/footer', to: 'main', message: 'Footer done first (urgent)' },
    { action: 'delete-branch', branch: 'feature/footer', message: 'Clean up footer branch' },
    { action: 'commit', branch: 'feature/navbar', message: 'Back to navbar - add links' },
    { action: 'merge', from: 'feature/navbar', to: 'main', message: 'Navbar complete' },
    { action: 'delete-branch', branch: 'feature/navbar', message: 'Clean up navbar branch' }
  ]
}

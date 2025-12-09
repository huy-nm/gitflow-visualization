// Beginner: Undo Last Commit
export const undoLastCommit = {
  id: 'undo-last-commit',
  title: 'Undo Last Commit',
  icon: '↩️',
  category: 'beginner',
  description: 'Made a mistake? Learn how to undo and redo your last commit',
  steps: [
    { action: 'create-branch', from: 'main', to: 'feature/settings', message: 'Start settings feature' },
    { action: 'commit', branch: 'feature/settings', message: 'Add settings page' },
    { action: 'commit', branch: 'feature/settings', message: 'OOPS! Wrong file committed' },
    { action: 'commit', branch: 'feature/settings', message: 'Undo: git reset --soft HEAD~1' },
    { action: 'commit', branch: 'feature/settings', message: 'Add correct settings file' },
    { action: 'merge', from: 'feature/settings', to: 'main', message: 'Merge fixed feature' },
    { action: 'delete-branch', branch: 'feature/settings', message: 'Clean up' }
  ]
}

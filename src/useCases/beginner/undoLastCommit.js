// Beginner: Undo Last Commit
export const undoLastCommit = {
  id: 'undo-last-commit',
  title: 'Undo Last Commit',
  icon: '↩️',
  category: 'beginner',
  description: 'Made a mistake? Learn how to undo and redo your last commit',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/settings', 
      message: '🌱 Step 1: Create feature branch for settings' 
    },
    { 
      action: 'commit', 
      branch: 'feature/settings', 
      message: '⚙️ Step 2: Add settings page structure' 
    },
    { 
      action: 'commit', 
      branch: 'feature/settings', 
      message: '❌ Step 3: OOPS! Committed to the wrong file / wrong message' 
    },
    { 
      action: 'commit', 
      branch: 'feature/settings', 
      message: '↩️ Step 4: Undo! (git reset --soft HEAD~1) - Changes are back in staging' 
    },
    { 
      action: 'commit', 
      branch: 'feature/settings', 
      message: '✅ Step 5: Commit again - Correct files and message this time' 
    },
    { 
      action: 'merge', 
      from: 'feature/settings', 
      to: 'develop', 
      message: '👍 Step 6: Merge fixed feature to "develop"' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/settings', 
      message: '🧹 Step 7: Clean up' 
    }
  ]
}

// Beginner: Save Your Work
export const saveYourWork = {
  id: 'save-your-work',
  title: 'Save Your Work',
  icon: '💾',
  category: 'beginner',
  description: 'Make multiple commits to save your progress as you work',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/user-profile', 
      message: '🌱 Step 1: New feature - Branch off "develop" to start the user profile' 
    },
    { 
      action: 'commit', 
      branch: 'feature/user-profile', 
      message: '📝 Step 2: Commit 1 - Added basic page layout' 
    },
    { 
      action: 'commit', 
      branch: 'feature/user-profile', 
      message: '🖼️ Step 3: Commit 2 - Added user avatar component' 
    },
    { 
      action: 'commit', 
      branch: 'feature/user-profile', 
      message: '✏️ Step 4: Commit 3 - Added bio text field' 
    },
    { 
      action: 'commit', 
      branch: 'feature/user-profile', 
      message: '💾 Step 5: Commit 4 - Added save button. Frequent commits save your progress!' 
    },
    { 
      action: 'merge', 
      from: 'feature/user-profile', 
      to: 'develop', 
      message: '✅ Step 6: Feature complete - Merge all work back to "develop"' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/user-profile', 
      message: '🧹 Step 7: Cleanup - Delete the feature branch' 
    }
  ]
}

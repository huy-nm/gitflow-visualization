// Beginner: Switch Between Tasks
export const switchBetweenTasks = {
  id: 'switch-between-tasks',
  title: 'Switch Between Tasks',
  icon: '🔀',
  category: 'beginner',
  description: 'Learn to work on multiple things by switching branches',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/navbar', 
      message: '🌱 Step 1: Start Task A - Create "navbar" branch from develop' 
    },
    { 
      action: 'commit', 
      branch: 'feature/navbar', 
      message: '💻 Step 2: Work on navbar... (git commit)' 
    },
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/footer', 
      message: '🚨 Step 3: URGENT REQUEST! Switch context to new "footer" branch' 
    },
    { 
      action: 'commit', 
      branch: 'feature/footer', 
      message: '🔥 Step 4: Implement urgent footer fix' 
    },
    { 
      action: 'merge', 
      from: 'feature/footer', 
      to: 'develop', 
      message: '✅ Step 5: Footer done! Merge it immediately' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/footer', 
      message: '🧹 Step 6: Cleanup footer branch' 
    },
    { 
      action: 'commit', 
      branch: 'feature/navbar', 
      message: '🔙 Step 7: Switch back to "navbar" branch and continue working' 
    },
    { 
      action: 'merge', 
      from: 'feature/navbar', 
      to: 'develop', 
      message: '✅ Step 8: Navbar complete! Merge to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/navbar', 
      message: '🧹 Step 9: All tasks complete!' 
    }
  ]
}

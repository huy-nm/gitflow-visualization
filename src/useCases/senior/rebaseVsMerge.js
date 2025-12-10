// Senior: Rebase vs Merge
export const rebaseVsMerge = {
  id: 'rebase-vs-merge',
  title: 'Rebase vs Merge',
  icon: '📏',
  category: 'senior',
  description: 'Use interactive rebase for clean, linear history',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/optimization', 
      message: '🌱 Step 1: Start optimization' 
    },
    { 
      action: 'commit', 
      branch: 'feature/optimization', 
      message: '💨 Step 2: Optimize queries' 
    },
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '👥 Step 3: Team adds commits to develop' 
    },
    { 
      action: 'commit', 
      branch: 'feature/optimization', 
      message: '💾 Step 4: Add caching layer' 
    },
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '👥 Step 5: More team activity on develop' 
    },
    { 
      action: 'commit', 
      branch: 'feature/optimization', 
      message: 'rewind: Rebase! (git rebase develop) - Replaying my commits on top of new develop' 
    },
    { 
      action: 'commit', 
      branch: 'feature/optimization', 
      message: '🛠️ Step 6: Conflict resolution during rebase' 
    },
    { 
      action: 'commit', 
      branch: 'feature/optimization', 
      message: '✨ Step 7: History is now linear!' 
    },
    { 
      action: 'merge', 
      from: 'feature/optimization', 
      to: 'develop', 
      message: '🔀 Step 8: Fast-forward merge - No ugly merge bubbles' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/optimization', 
      message: '🧹 Step 9: Cleanup' 
    }
  ]
}

// Intermediate: Sync with Team
export const syncWithTeam = {
  id: 'sync-with-team',
  title: 'Sync with Team',
  icon: '🤝',
  category: 'intermediate',
  description: 'Pull latest changes from develop and resolve conflicts',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/search', 
      message: '🌱 Step 1: Start search feature (develop is at Commit A)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/search', 
      message: '💻 Step 2: Basic search UI implementation' 
    },
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '👥 Step 3: Meanwile, teammate merges their work to develop' 
    },
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '👥 Step 4: Another teammate merges more changes' 
    },
    { 
      action: 'merge', 
      from: 'develop', 
      to: 'feature/search', 
      message: '🔄 Step 5: SYNC! (git pull origin develop) - Get their changes into your branch' 
    },
    { 
      action: 'commit', 
      branch: 'feature/search', 
      message: '🛠️ Step 6: Fix conflicts - Your code + Their code' 
    },
    { 
      action: 'commit', 
      branch: 'feature/search', 
      message: '✅ Step 7: Finish feature (now compatible with latest develop)' 
    },
    { 
      action: 'merge', 
      from: 'feature/search', 
      to: 'develop', 
      message: '🔀 Step 8: Merge back - No conflicts because we already synced!' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/search', 
      message: '🧹 Step 9: Cleanup' 
    }
  ]
}

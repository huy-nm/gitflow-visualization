export const parallelFeatures = {
  id: 'multiple-features',
  title: 'Parallel Features',
  icon: '🔀',
  description: 'Multiple developers working on different features simultaneously',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/dashboard', 
      message: '🌱 Step 1: Dev A starts Dashboard' 
    },
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/profile', 
      message: '🌱 Step 2: Dev B starts Profile' 
    },
    { 
      action: 'commit', 
      branch: 'feature/dashboard', 
      message: '💻 Step 3: Dev A: Dashboard layout' 
    },
    { 
      action: 'commit', 
      branch: 'feature/profile', 
      message: '💻 Step 4: Dev B: Profile page' 
    },
    { 
      action: 'commit', 
      branch: 'feature/dashboard', 
      message: '💻 Step 5: Dev A: Add charts' 
    },
    { 
      action: 'commit', 
      branch: 'feature/profile', 
      message: '💻 Step 6: Dev B: Avatar upload' 
    },
    { 
      action: 'merge', 
      from: 'feature/profile', 
      to: 'develop', 
      message: '✅ Step 7: Profile Feature Merged!' 
    },
    { 
      action: 'merge', 
      from: 'feature/dashboard', 
      to: 'develop', 
      message: '✅ Step 8: Dashboard Feature Merged!' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/profile', 
      message: '🧹 Step 9: Cleanup Profile branch' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/dashboard', 
      message: '🧹 Step 10: Cleanup Dashboard branch' 
    }
  ]
}

// Intermediate: Parallel Work
export const parallelWork = {
  id: 'parallel-work',
  title: 'Parallel Work',
  icon: '⚡',
  category: 'intermediate',
  description: 'Two features developed simultaneously - merge order matters',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/auth', 
      message: '👤 Step 1: Alice starts Auth feature' 
    },
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/dashboard', 
      message: '📊 Step 2: Bob starts Dashboard feature (depends on Auth)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/auth', 
      message: '👤 Step 3: Alice implements login' 
    },
    { 
      action: 'commit', 
      branch: 'feature/dashboard', 
      message: '📊 Step 4: Bob builds dashboard UI' 
    },
    { 
      action: 'commit', 
      branch: 'feature/auth', 
      message: '👤 Step 5: Alice finishes Auth service' 
    },
    { 
      action: 'commit', 
      branch: 'feature/dashboard', 
      message: '📊 Step 6: Bob adds widgets' 
    },
    { 
      action: 'merge', 
      from: 'feature/auth', 
      to: 'develop', 
      message: '✅ Step 7: Alice merges first! Auth is now in develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/auth', 
      message: '🧹 Step 8: Cleanup Auth' 
    },
    { 
      action: 'merge', 
      from: 'develop', 
      to: 'feature/dashboard', 
      message: '🔄 Step 9: Bob pulls develop to get Alice\'s Auth code' 
    },
    { 
      action: 'commit', 
      branch: 'feature/dashboard', 
      message: '🛠️ Step 10: Bob integrates Auth into Dashboard' 
    },
    { 
      action: 'merge', 
      from: 'feature/dashboard', 
      to: 'develop', 
      message: '✅ Step 11: Bob merges Dashboard (now includes everything)' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/dashboard', 
      message: '🧹 Step 12: Cleanup Dashboard' 
    }
  ]
}

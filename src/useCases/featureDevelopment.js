export const featureDevelopment = {
  id: 'basic-feature',
  title: 'Feature Development',
  icon: '🌟',
  description: 'Create a new feature branch from develop, work on it, and merge back',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/login', 
      message: '🌱 Step 1: New feature? Branch off DEVELOP' 
    },
    { 
      action: 'commit', 
      branch: 'feature/login', 
      message: '💻 Step 2: Implement login UI' 
    },
    { 
      action: 'commit', 
      branch: 'feature/login', 
      message: '🔐 Step 3: Add authentication logic' 
    },
    { 
      action: 'commit', 
      branch: 'feature/login', 
      message: '🧪 Step 4: Add unit tests' 
    },
    { 
      action: 'merge', 
      from: 'feature/login', 
      to: 'develop', 
      message: '✅ Step 5: Feature done, merge back to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/login', 
      message: '🧹 Step 6: Cleanup feature branch' 
    }
  ]
}

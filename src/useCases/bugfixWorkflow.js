export const bugfixWorkflow = {
  id: 'bugfix-develop',
  title: 'Bugfix',
  icon: '🐛',
  description: 'Fix a bug discovered during development phase',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'bugfix/form-validation', 
      message: '🌱 Step 1: Bug found in Dev - branch off DEVELOP' 
    },
    { 
      action: 'commit', 
      branch: 'bugfix/form-validation', 
      message: '🐛 Step 2: Fix email validation regex' 
    },
    { 
      action: 'commit', 
      branch: 'bugfix/form-validation', 
      message: '🧪 Step 3: Add test cases' 
    },
    { 
      action: 'merge', 
      from: 'bugfix/form-validation', 
      to: 'develop', 
      message: '✅ Step 4: Fix Verified - Merge to develop' 
    },
    { 
      action: 'delete-branch', 
      branch: 'bugfix/form-validation', 
      message: '🧹 Step 5: Cleanup' 
    }
  ]
}

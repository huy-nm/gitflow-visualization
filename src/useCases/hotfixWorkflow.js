export const hotfixWorkflow = {
  id: 'hotfix',
  title: 'Hotfix Workflow',
  icon: '🔥',
  description: 'Fix a critical bug in production immediately',
  steps: [
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'hotfix/security-patch', 
      message: '🔥 Step 1: Emergency! Create hotfix branch from MAIN' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/security-patch', 
      message: '🚑 Step 2: Fix critical security vulnerability' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/security-patch', 
      message: '🧪 Step 3: Add regression tests to prevent recurrence' 
    },
    { 
      action: 'merge', 
      from: 'hotfix/security-patch', 
      to: 'main', 
      message: '🚀 Step 4: Deploy hotfix to production immediately' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v1.0.1', 
      message: '🏷️ Step 5: Tag fix release v1.0.1' 
    },
    { 
      action: 'merge', 
      from: 'hotfix/security-patch', 
      to: 'develop', 
      message: '🔄 Step 6: Sync fix back to develop (Crucial!)' 
    },
    { 
      action: 'delete-branch', 
      branch: 'hotfix/security-patch', 
      message: '🧹 Step 7: Cleanup' 
    }
  ]
}

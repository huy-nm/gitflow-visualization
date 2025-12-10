// Senior: Branch Protection Rules
export const branchProtection = {
  id: 'branch-protection',
  title: 'Branch Protection',
  icon: '🛡️',
  category: 'senior',
  description: 'Enforce code quality with protected branches and required reviews',
  steps: [
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'hotfix/urgent-fix', 
      message: '🔥 Step 1: Critical Bug! Create hotfix branch from main' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/urgent-fix', 
      message: '❌ Step 2: User tries direct push to main... BLOCKED!' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/urgent-fix', 
      message: '🛡️ Step 3: Branch Protection Rule: Must use Pull Request' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/urgent-fix', 
      message: '📝 Step 4: PR Created - Waiting for code review' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/urgent-fix', 
      message: '⚙️ Step 5: CI Pipeline running... Tests passed ✅' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/urgent-fix', 
      message: '👀 Step 6: Review 1/2: Tech Lead approves' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/urgent-fix', 
      message: '👀 Step 7: Review 2/2: Security Team approves' 
    },
    { 
      action: 'merge', 
      from: 'hotfix/urgent-fix', 
      to: 'main', 
      message: '✅ Step 8: Checks passed - Merge to PRODUCTION' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v1.2.3', 
      message: '🏷️ Step 9: Tag release' 
    },
    { 
      action: 'merge', 
      from: 'hotfix/urgent-fix', 
      to: 'develop', 
      message: '🔄 Step 10: Sync hotfix back to develop (Crucial!)' 
    },
    { 
      action: 'delete-branch', 
      branch: 'hotfix/urgent-fix', 
      message: '🧹 Step 11: Cleanup' 
    }
  ]
}

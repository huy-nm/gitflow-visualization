// Intermediate: Feature Branch Cleanup
export const featureBranchCleanup = {
  id: 'feature-branch-cleanup',
  title: 'Feature Branch Cleanup',
  icon: '🧹',
  category: 'intermediate',
  description: 'Squash messy commits into clean history before merge',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/modal', 
      message: '🌱 Step 1: Start modal feature' 
    },
    { 
      action: 'commit', 
      branch: 'feature/modal', 
      message: '🚧 Step 2: WIP commit' 
    },
    { 
      action: 'commit', 
      branch: 'feature/modal', 
      message: '🚧 Step 3: fix typo' 
    },
    { 
      action: 'commit', 
      branch: 'feature/modal', 
      message: '🚧 Step 4: more debugging' 
    },
    { 
      action: 'commit', 
      branch: 'feature/modal', 
      message: '🚧 Step 5: almost there' 
    },
    { 
      action: 'commit', 
      branch: 'feature/modal', 
      message: '🚧 Step 6: final tweak' 
    },
    { 
      action: 'commit', 
      branch: 'feature/modal', 
      message: '🪄 Step 7: SQUASH! (git rebase -i) - Combine all previous 5 commits into 1' 
    },
    { 
      action: 'commit', 
      branch: 'feature/modal', 
      message: '✨ Step 8: Clean history - "Add reusable modal component"' 
    },
    { 
      action: 'merge', 
      from: 'feature/modal', 
      to: 'develop', 
      message: '🔀 Step 9: Merge nicely - Develop sees only 1 clean commit' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/modal', 
      message: '🧹 Step 10: Cleanup' 
    }
  ]
}

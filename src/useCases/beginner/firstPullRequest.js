// Beginner: Your First Pull Request
export const firstPullRequest = {
  id: 'first-pull-request',
  title: 'Your First Pull Request',
  icon: '📬',
  category: 'beginner',
  description: 'The complete workflow: branch → commits → PR → review → merge',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/add-button', 
      message: '👨‍💻 Step 1: Create branch - PRs usually go from feature -> develop' 
    },
    { 
      action: 'commit', 
      branch: 'feature/add-button', 
      message: '🔨 Step 2: Build the component' 
    },
    { 
      action: 'commit', 
      branch: 'feature/add-button', 
      message: '🎨 Step 3: Add styles' 
    },
    { 
      action: 'commit', 
      branch: 'feature/add-button', 
      message: '🧪 Step 4: Add tests' 
    },
    { 
      action: 'commit', 
      branch: 'feature/add-button', 
      message: '📝 Step 5: Open Pull Request (PR) - Ask team to review your code' 
    },
    { 
      action: 'commit', 
      branch: 'feature/add-button', 
      message: '👀 Step 6: Teammate reviews & comments "LGTM!" (Looks Good To Me)' 
    },
    { 
      action: 'merge', 
      from: 'feature/add-button', 
      to: 'develop', 
      message: '✅ Step 7: Merge PR - Your code is now in "develop"!' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/add-button', 
      message: '🧹 Step 8: Branch deleted automatically by GitHub/GitLab' 
    }
  ]
}

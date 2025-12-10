// Beginner: First Feature Branch
export const firstFeatureBranch = {
  id: 'first-feature-branch',
  title: 'First Feature Branch',
  icon: '🌱',
  category: 'beginner',
  description: 'Learn the basics: create a branch, make changes, and merge back',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/hello-world', 
      message: '🌱 Step 1: Create feature branch - Always branch from "develop" for new features!' 
    },
    { 
      action: 'commit', 
      branch: 'feature/hello-world', 
      message: '💻 Step 2: Make changes - Work is isolated in your feature branch' 
    },
    { 
      action: 'merge', 
      from: 'feature/hello-world', 
      to: 'develop', 
      message: '✅ Step 3: Function complete! Merge back to "develop" to share your code' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/hello-world', 
      message: '🧹 Step 4: Cleanup - The branch is merged, so we can delete it safely' 
    }
  ]
}

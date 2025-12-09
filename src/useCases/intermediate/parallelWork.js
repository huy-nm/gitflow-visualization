// Intermediate: Parallel Work
export const parallelWork = {
  id: 'parallel-work',
  title: 'Parallel Work',
  icon: '⚡',
  category: 'intermediate',
  description: 'Two features developed simultaneously - merge order matters',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/auth', message: 'Alice starts auth feature' },
    { action: 'create-branch', from: 'develop', to: 'feature/dashboard', message: 'Bob starts dashboard' },
    { action: 'commit', branch: 'feature/auth', message: 'Alice: Add login page' },
    { action: 'commit', branch: 'feature/dashboard', message: 'Bob: Add dashboard layout' },
    { action: 'commit', branch: 'feature/auth', message: 'Alice: Add auth service' },
    { action: 'commit', branch: 'feature/dashboard', message: 'Bob: Add dashboard widgets' },
    { action: 'merge', from: 'feature/auth', to: 'develop', message: 'Alice merges first (auth needed by dashboard)' },
    { action: 'delete-branch', branch: 'feature/auth', message: 'Clean up auth branch' },
    { action: 'merge', from: 'develop', to: 'feature/dashboard', message: 'Bob syncs to get auth' },
    { action: 'commit', branch: 'feature/dashboard', message: 'Bob: Integrate auth into dashboard' },
    { action: 'merge', from: 'feature/dashboard', to: 'develop', message: 'Bob merges dashboard' },
    { action: 'delete-branch', branch: 'feature/dashboard', message: 'Clean up dashboard branch' }
  ]
}

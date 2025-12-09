
export const blueGreenDeploy = {
  id: 'blue-green',
  title: 'Blue/Green Deployment',
  icon: '🔵',
  description: 'Zero-downtime deployment by switching traffic between environments',
  steps: [
    { action: 'create-branch', from: 'main', to: 'release/v3.0', message: 'Prepare v3.0' },
    { action: 'commit', branch: 'release/v3.0', message: 'Deploy to Green Env' },
    { action: 'commit', branch: 'release/v3.0', message: 'Run smoke tests on Green' },
    { action: 'merge', from: 'release/v3.0', to: 'main', message: 'Merge (Switch Traffic to Green)' },
    { action: 'delete-branch', branch: 'release/v3.0', message: 'Cleanup' }
  ]
}

export const canaryRelease = {
  id: 'canary',
  title: 'Canary Release',
  icon: '🐥',
  description: 'Gradual rollout to a small percentage of users',
  steps: [
    { action: 'create-branch', from: 'main', to: 'feature/risky-change', message: 'Risky feature' },
    { action: 'merge', from: 'feature/risky-change', to: 'develop', message: 'Deploy to internal users' },
    { action: 'create-branch', from: 'develop', to: 'release/canary', message: 'Prep canary' },
    { action: 'merge', from: 'release/canary', to: 'main', message: 'Merge (Rollout 10%)' },
    { action: 'commit', branch: 'main', message: 'Scale to 100%' }
  ]
}

export const rollbackProd = {
  id: 'rollback',
  title: 'Production Rollback',
  icon: '⏮️',
  description: 'Reverting to previous stable version after failed deploy',
  steps: [
    { action: 'create-branch', from: 'main', to: 'hotfix/revert-v4', message: 'Emergency Revert' },
    { action: 'commit', branch: 'hotfix/revert-v4', message: 'Revert bad commit' },
    { action: 'merge', from: 'hotfix/revert-v4', to: 'main', message: 'Deploy stable version' },
    { action: 'tag', branch: 'main', tag: 'v4.0.1-rollback', message: 'Mark rollback' }
  ]
}

export const dbMigration = {
  id: 'db-migration',
  title: 'Database Migration',
  icon: '🗄️',
  description: 'Running schema changes during deployment pipeline',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/add-users-table', message: 'Schema change' },
    { action: 'commit', branch: 'feature/add-users-table', message: 'Add migration script' },
    { action: 'merge', from: 'feature/add-users-table', to: 'develop', message: 'Merge (Runs migration on Dev)' },
    { action: 'create-branch', from: 'develop', to: 'release/db-update', message: 'Prep release' },
    { action: 'merge', from: 'release/db-update', to: 'main', message: 'Merge (Runs migration on Prod)' }
  ]
}

export const envTeardown = {
  id: 'env-teardown',
  title: 'Environment Teardown',
  icon: '♻️',
  description: 'Cleaning up temporary preview environments when PR is closed',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/temp-experiment', message: 'Experiment' },
    { action: 'commit', branch: 'feature/temp-experiment', message: 'Deploy Preview Env' },
    { action: 'merge', from: 'feature/temp-experiment', to: 'develop', message: 'Merge code' },
    { action: 'delete-branch', branch: 'feature/temp-experiment', message: 'Delete branch (Teardown Env)' }
  ]
}

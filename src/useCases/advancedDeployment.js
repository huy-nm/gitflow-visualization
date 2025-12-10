
export const blueGreenDeploy = {
  id: 'blue-green',
  title: 'Blue/Green Deployment',
  icon: '🔵',
  description: 'Zero-downtime deployment by switching traffic between environments',
  steps: [
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'release/v3.0', 
      message: '📦 Step 1: Prepare v3.0 Release Candidate' 
    },
    { 
      action: 'commit', 
      branch: 'release/v3.0', 
      message: '🚀 Step 2: Deploy v3.0 to GREEN (Idle Env)' 
    },
    { 
      action: 'commit', 
      branch: 'release/v3.0', 
      message: '🧪 Step 3: Run smoke tests on GREEN' 
    },
    { 
      action: 'merge', 
      from: 'release/v3.0', 
      to: 'main', 
      message: '🔀 Step 4: Switch Traffic! (Blue -> Green)' 
    },
    { 
      action: 'delete-branch', 
      branch: 'release/v3.0', 
      message: '🧹 Step 5: Cleanup' 
    }
  ]
}

export const canaryRelease = {
  id: 'canary',
  title: 'Canary Release',
  icon: '🐥',
  description: 'Gradual rollout to a small percentage of users',
  steps: [
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'feature/risky-change', 
      message: '🌱 Step 1: Risky Feature Branch' 
    },
    { 
      action: 'merge', 
      from: 'feature/risky-change', 
      to: 'develop', 
      message: '🧪 Step 2: Deploy to Internal Users (Dogfooding)' 
    },
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/canary', 
      message: '📦 Step 3: Prep Canary Release' 
    },
    { 
      action: 'merge', 
      from: 'release/canary', 
      to: 'main', 
      message: '🚀 Step 4: Merge & Rollout to 10% Users' 
    },
    { 
      action: 'commit', 
      branch: 'main', 
      message: '📈 Step 5: Metrics Good - Scale to 100%' 
    }
  ]
}

export const rollbackProd = {
  id: 'rollback',
  title: 'Production Rollback',
  icon: '⏮️',
  description: 'Reverting to previous stable version after failed deploy',
  steps: [
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'hotfix/revert-v4', 
      message: '🚨 Step 1: Emergency! Create Revert Branch' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/revert-v4', 
      message: '↩️ Step 2: Revert "Bad Commit" (git revert)' 
    },
    { 
      action: 'merge', 
      from: 'hotfix/revert-v4', 
      to: 'main', 
      message: '🚀 Step 3: Deploy Stable Version' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v4.0.1-rollback', 
      message: '🏷️ Step 4: Tag Rollback Release' 
    }
  ]
}

export const dbMigration = {
  id: 'db-migration',
  title: 'Database Migration',
  icon: '🗄️',
  description: 'Running schema changes during deployment pipeline',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/add-users-table', 
      message: '🌱 Step 1: Branch for Schema Change' 
    },
    { 
      action: 'commit', 
      branch: 'feature/add-users-table', 
      message: '📝 Step 2: Add migration script (SQL)' 
    },
    { 
      action: 'merge', 
      from: 'feature/add-users-table', 
      to: 'develop', 
      message: '🚀 Step 3: Merge -> Migrate DEV DB' 
    },
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/db-update', 
      message: '📦 Step 4: Prep Release' 
    },
    { 
      action: 'merge', 
      from: 'release/db-update', 
      to: 'main', 
      message: '🚀 Step 5: Merge -> Migrate PROD DB' 
    }
  ]
}

export const envTeardown = {
  id: 'env-teardown',
  title: 'Environment Teardown',
  icon: '♻️',
  description: 'Cleaning up temporary preview environments when PR is closed',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/temp-experiment', 
      message: '🌱 Step 1: Experiment Branch' 
    },
    { 
      action: 'commit', 
      branch: 'feature/temp-experiment', 
      message: '🚀 Step 2: Deploy Preview Env (URL: https://pr-123.app)' 
    },
    { 
      action: 'merge', 
      from: 'feature/temp-experiment', 
      to: 'develop', 
      message: '✅ Step 3: Merge Code' 
    },
    { 
      action: 'delete-branch', 
      branch: 'feature/temp-experiment', 
      message: '🔥 Step 4: Delete Branch -> Destroy Preview Env' 
    }
  ]
}

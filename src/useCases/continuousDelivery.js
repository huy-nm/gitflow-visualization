
export const deployToDev = {
  id: 'deploy-dev',
  title: 'Deploy to Dev',
  icon: '🚧',
  description: 'Automatic deployment to Development environment on merge to develop',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/api-endpoints', 
      message: '🌱 Step 1: API Feature Branch' 
    },
    { 
      action: 'commit', 
      branch: 'feature/api-endpoints', 
      message: '💻 Step 2: Add endpoints' 
    },
    { 
      action: 'merge', 
      from: 'feature/api-endpoints', 
      to: 'develop', 
      message: '🚀 Step 3: Merge -> Trigger DEV Deploy' 
    }
  ]
}

export const deployToStaging = {
  id: 'deploy-staging',
  title: 'Deploy to Staging',
  icon: '🎭',
  description: 'Deployment to Staging environment when a release branch is created',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/v1.1.0', 
      message: '📦 Step 1: Cut Release Branch -> Trigger STAGING Deploy' 
    },
    { 
      action: 'commit', 
      branch: 'release/v1.1.0', 
      message: '🔢 Step 2: Bump version' 
    },
    { 
      action: 'commit', 
      branch: 'release/v1.1.0', 
      message: '🐛 Step 3: Minor fix -> Re-deploy Staging' 
    },
    { 
      action: 'merge', 
      from: 'release/v1.1.0', 
      to: 'main', 
      message: '🚀 Step 4: Ship to Production' 
    }
  ]
}

export const deployToProd = {
  id: 'deploy-prod',
  title: 'Deploy to Production',
  icon: '🚀',
  description: 'Production deployment triggered by merging to main',
  steps: [
    { 
      action: 'create-branch', 
      from: 'main', 
      to: 'hotfix/v1.1.1', 
      message: '🔥 Step 1: Hotfix Branch' 
    },
    { 
      action: 'commit', 
      branch: 'hotfix/v1.1.1', 
      message: '🚑 Step 2: Apply Patch' 
    },
    { 
      action: 'merge', 
      from: 'hotfix/v1.1.1', 
      to: 'main', 
      message: '🚀 Step 3: Merge -> Trigger PROD Deploy' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v1.1.1', 
      message: '🏷️ Step 4: Tag Release' 
    }
  ]
}

export const buildArtifacts = {
  id: 'build-artifacts',
  title: 'Build Release Artifacts',
  icon: '📦',
  description: 'Generating binary assets or bundles for release',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/v2.0', 
      message: '📦 Step 1: Start Release' 
    },
    { 
      action: 'commit', 
      branch: 'release/v2.0', 
      message: '💻 Step 2: Finalize features' 
    },
    { 
      action: 'tag', 
      branch: 'release/v2.0', 
      tag: 'rc.1', 
      message: '🏭 Step 3: Tag RC1 -> Build Assets (.exe/.dmg)' 
    },
    { 
      action: 'merge', 
      from: 'release/v2.0', 
      to: 'main', 
      message: '🚀 Step 4: Merge to main' 
    }
  ]
}

export const dockerBuild = {
  id: 'docker-build',
  title: 'Docker Build & Push',
  icon: '🐳',
  description: 'Building and pushing Docker images to registry',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/container', 
      message: '🌱 Step 1: Containerize Feature' 
    },
    { 
      action: 'commit', 
      branch: 'feature/container', 
      message: '🐳 Step 2: Add Dockerfile' 
    },
    { 
      action: 'merge', 
      from: 'feature/container', 
      to: 'develop', 
      message: '🚀 Step 3: Merge -> Build & Push Dev Image' 
    }
  ]
}

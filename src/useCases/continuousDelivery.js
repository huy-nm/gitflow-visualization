
export const deployToDev = {
  id: 'deploy-dev',
  title: 'Deploy to Dev',
  icon: '🚧',
  description: 'Automatic deployment to Development environment on merge to develop',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/api-endpoints', message: 'API work' },
    { action: 'commit', branch: 'feature/api-endpoints', message: 'Add endpoints' },
    { action: 'merge', from: 'feature/api-endpoints', to: 'develop', message: 'Merge (Triggers Dev Deploy)' }
  ]
}

export const deployToStaging = {
  id: 'deploy-staging',
  title: 'Deploy to Staging',
  icon: '🎭',
  description: 'Deployment to Staging environment when a release branch is created',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'release/v1.1.0', message: 'Cut release (Triggers Staging Deploy)' },
    { action: 'commit', branch: 'release/v1.1.0', message: 'Bump version' },
    { action: 'commit', branch: 'release/v1.1.0', message: 'Minor fix (Re-deploys Staging)' },
    { action: 'merge', from: 'release/v1.1.0', to: 'main', message: 'Ship to Prod' }
  ]
}

export const deployToProd = {
  id: 'deploy-prod',
  title: 'Deploy to Production',
  icon: '🚀',
  description: 'Production deployment triggered by merging to main',
  steps: [
    { action: 'create-branch', from: 'main', to: 'hotfix/v1.1.1', message: 'Critical fix' },
    { action: 'commit', branch: 'hotfix/v1.1.1', message: 'Apply patch' },
    { action: 'merge', from: 'hotfix/v1.1.1', to: 'main', message: 'Merge (Triggers Prod Deploy)' },
    { action: 'tag', branch: 'main', tag: 'v1.1.1', message: 'Tag release' }
  ]
}

export const buildArtifacts = {
  id: 'build-artifacts',
  title: 'Build Release Artifacts',
  icon: '📦',
  description: 'Generating binary assets or bundles for release',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'release/v2.0', message: 'Start Release' },
    { action: 'commit', branch: 'release/v2.0', message: 'Finalize features' },
    { action: 'tag', branch: 'release/v2.0', tag: 'rc.1', message: 'Release Candidate (Builds Assets)' },
    { action: 'merge', from: 'release/v2.0', to: 'main', message: 'Merge to main' }
  ]
}

export const dockerBuild = {
  id: 'docker-build',
  title: 'Docker Build & Push',
  icon: '🐳',
  description: 'Building and pushing Docker images to registry',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/container', message: 'Containerize' },
    { action: 'commit', branch: 'feature/container', message: 'Add Dockerfile' },
    { action: 'merge', from: 'feature/container', to: 'develop', message: 'Merge (Builds Dev Image)' }
  ]
}

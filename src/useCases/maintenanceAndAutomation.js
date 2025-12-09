
export const releaseTagger = {
  id: 'release-tagger',
  title: 'Auto Release Tagger',
  icon: '🏷️',
  description: 'Automatically creating git tags based on package version',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'release/v1.5.0', message: 'Start Release' },
    { action: 'commit', branch: 'release/v1.5.0', message: 'Bump package.json to 1.5.0' },
    { action: 'merge', from: 'release/v1.5.0', to: 'main', message: 'Merge to main' },
    { action: 'tag', branch: 'main', tag: 'v1.5.0', message: 'Bot creates tag' }
  ]
}

export const changelogGen = {
  id: 'changelog-gen',
  title: 'Changelog Generator',
  icon: '📜',
  description: 'Generating CHANGELOG.md from commit messages',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'release/v1.6.0', message: 'Release v1.6.0' },
    { action: 'commit', branch: 'release/v1.6.0', message: 'feat: add new button' },
    { action: 'commit', branch: 'release/v1.6.0', message: 'fix: crash on login' },
    { action: 'commit', branch: 'release/v1.6.0', message: 'ci: generate changelog' },
    { action: 'merge', from: 'release/v1.6.0', to: 'main', message: 'Merge & Publish' }
  ]
}

export const depUpdates = {
  id: 'dep-updates',
  title: 'Dependency Updates',
  icon: '🆙',
  description: 'Automated dependency updates via generic bot',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'bot/deps/react-19', message: 'Bot creates branch' },
    { action: 'commit', branch: 'bot/deps/react-19', message: 'Update React to v19' },
    { action: 'commit', branch: 'bot/deps/react-19', message: 'CI Checks Pass ✅' },
    { action: 'merge', from: 'bot/deps/react-19', to: 'develop', message: 'Auto-merge by Bot' }
  ]
}

export const nightlyBuilds = {
  id: 'nightly-builds',
  title: 'Nightly Builds',
  icon: '🌙',
  description: 'Scheduled nightly builds for long-running tests',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/heavy-work', message: 'Daily work' },
    { action: 'merge', from: 'feature/heavy-work', to: 'develop', message: 'Merge to develop' },
    { action: 'commit', branch: 'develop', message: 'Nightly Trigger (Cron)' },
    { action: 'tag', branch: 'develop', tag: 'nightly-20231209', message: 'Tag Nightly' }
  ]
}

export const docsDeploy = {
  id: 'docs-deploy',
  title: 'Documentation Deploy',
  icon: '📚',
  description: 'Building and deploying documentation site',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'docs/api-ref', message: 'Update docs' },
    { action: 'commit', branch: 'docs/api-ref', message: 'Update markdown files' },
    { action: 'merge', from: 'docs/api-ref', to: 'develop', message: 'Merge (Deploys Docs)' }
  ]
}

export const e2eTest = {
  id: 'e2e-test',
  title: 'E2E Testing',
  icon: '🤖',
  description: 'Running full end-to-end browser tests',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/cart-flow', message: 'New checkout flow' },
    { action: 'commit', branch: 'feature/cart-flow', message: 'Impl Code' },
    { action: 'commit', branch: 'feature/cart-flow', message: 'Run Cypress (Takes 10m)' },
    { action: 'merge', from: 'feature/cart-flow', to: 'develop', message: 'Merge Verified Code' }
  ]
}

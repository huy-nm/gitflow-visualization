
export const releaseTagger = {
  id: 'release-tagger',
  title: 'Auto Release Tagger',
  icon: '🏷️',
  description: 'Automatically creating git tags based on package version',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/v1.5.0', 
      message: '📦 Step 1: Start Release' 
    },
    { 
      action: 'commit', 
      branch: 'release/v1.5.0', 
      message: '🔢 Step 2: Bump package.json to 1.5.0' 
    },
    { 
      action: 'merge', 
      from: 'release/v1.5.0', 
      to: 'main', 
      message: '🚀 Step 3: Merge to main' 
    },
    { 
      action: 'tag', 
      branch: 'main', 
      tag: 'v1.5.0', 
      message: '🤖 Step 4: Bot detects merge & creates git tag' 
    }
  ]
}

export const changelogGen = {
  id: 'changelog-gen',
  title: 'Changelog Generator',
  icon: '📜',
  description: 'Generating CHANGELOG.md from commit messages',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'release/v1.6.0', 
      message: '📦 Step 1: Release v1.6.0' 
    },
    { 
      action: 'commit', 
      branch: 'release/v1.6.0', 
      message: 'feat: add new button' 
    },
    { 
      action: 'commit', 
      branch: 'release/v1.6.0', 
      message: 'fix: crash on login' 
    },
    { 
      action: 'commit', 
      branch: 'release/v1.6.0', 
      message: '🤖 Step 2: CI generates CHANGELOG.md from commits' 
    },
    { 
      action: 'merge', 
      from: 'release/v1.6.0', 
      to: 'main', 
      message: '🚀 Step 3: Merge & Publish' 
    }
  ]
}

export const depUpdates = {
  id: 'dep-updates',
  title: 'Dependency Updates',
  icon: '🆙',
  description: 'Automated dependency updates via generic bot',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'bot/deps/react-19', 
      message: '🤖 Step 1: Bot creates branch for React v19' 
    },
    { 
      action: 'commit', 
      branch: 'bot/deps/react-19', 
      message: '📦 Step 2: Bot updates package.json' 
    },
    { 
      action: 'commit', 
      branch: 'bot/deps/react-19', 
      message: '✅ Step 3: CI Checks Pass' 
    },
    { 
      action: 'merge', 
      from: 'bot/deps/react-19', 
      to: 'develop', 
      message: '🚀 Step 4: Auto-merge by Bot' 
    }
  ]
}

export const nightlyBuilds = {
  id: 'nightly-builds',
  title: 'Nightly Builds',
  icon: '🌙',
  description: 'Scheduled nightly builds for long-running tests',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/heavy-work', 
      message: '🌱 Step 1: Daily work...' 
    },
    { 
      action: 'merge', 
      from: 'feature/heavy-work', 
      to: 'develop', 
      message: '✅ Step 2: Merge to develop' 
    },
    { 
      action: 'commit', 
      branch: 'develop', 
      message: '⏰ Step 3: Nightly Trigger (Cron Job)' 
    },
    { 
      action: 'tag', 
      branch: 'develop', 
      tag: 'nightly-20231209', 
      message: '🏷️ Step 4: Tag Nightly Build' 
    }
  ]
}

export const docsDeploy = {
  id: 'docs-deploy',
  title: 'Documentation Deploy',
  icon: '📚',
  description: 'Building and deploying documentation site',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'docs/api-ref', 
      message: '📝 Step 1: Branch for Docs Update' 
    },
    { 
      action: 'commit', 
      branch: 'docs/api-ref', 
      message: '✍️ Step 2: Update Markdown files' 
    },
    { 
      action: 'merge', 
      from: 'docs/api-ref', 
      to: 'develop', 
      message: '🚀 Step 3: Merge -> Auto-Deploy Docs Site' 
    }
  ]
}

export const e2eTest = {
  id: 'e2e-test',
  title: 'E2E Testing',
  icon: '🤖',
  description: 'Running full end-to-end browser tests',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/cart-flow', 
      message: '🌱 Step 1: New checkout flow' 
    },
    { 
      action: 'commit', 
      branch: 'feature/cart-flow', 
      message: '💻 Step 2: Implement Code' 
    },
    { 
      action: 'commit', 
      branch: 'feature/cart-flow', 
      message: '🧪 Step 3: Run Cypress (Takes 10m)' 
    },
    { 
      action: 'merge', 
      from: 'feature/cart-flow', 
      to: 'develop', 
      message: '✅ Step 4: Tests Passed -> Merge' 
    }
  ]
}

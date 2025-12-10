
export const ciOnPush = {
  id: 'ci-on-push',
  title: 'CI on Push',
  icon: '🚀',
  description: 'Triggers linting and unit tests on every push to feature branches',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/ci-demo', 
      message: '🌱 Step 1: Start feature' 
    },
    { 
      action: 'commit', 
      branch: 'feature/ci-demo', 
      message: '⚙️ Step 2: Push commit -> CI Starts...' 
    },
    { 
      action: 'commit', 
      branch: 'feature/ci-demo', 
      message: '✅ Step 3: Fix lint error -> CI Passes' 
    },
    { 
      action: 'merge', 
      from: 'feature/ci-demo', 
      to: 'develop', 
      message: '🚀 Step 4: Merge to develop' 
    }
  ]
}

export const ciOnPR = {
  id: 'ci-on-pr',
  title: 'CI on Pull Request',
  icon: '👀',
  description: 'Runs strict checks only when a Pull Request is opened',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/pr-checks', 
      message: '🌱 Step 1: Start feature' 
    },
    { 
      action: 'commit', 
      branch: 'feature/pr-checks', 
      message: '💻 Step 2: Work in progress (Local)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/pr-checks', 
      message: '💻 Step 3: Complete feature (Local)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/pr-checks', 
      message: '📝 Step 4: Open PR -> CI Checks Triggered!' 
    },
    { 
      action: 'merge', 
      from: 'feature/pr-checks', 
      to: 'develop', 
      message: '✅ Step 5: CI Passed -> Merge PR' 
    }
  ]
}

export const lintCheck = {
  id: 'lint-check',
  title: 'Linting Workflow',
  icon: '🧹',
  description: 'Automated code style checking and formatting',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/style-fix', 
      message: '🌱 Step 1: Start feature' 
    },
    { 
      action: 'commit', 
      branch: 'feature/style-fix', 
      message: '⚠️ Step 2: Commit messy code (Lint Warning)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/style-fix', 
      message: '🤖 Step 3: CI Auto-fixer runs (Formatted)' 
    },
    { 
      action: 'merge', 
      from: 'feature/style-fix', 
      to: 'develop', 
      message: '✅ Step 4: Merge Clean Code' 
    }
  ]
}

export const unitTests = {
  id: 'unit-tests',
  title: 'Unit Testing Suite',
  icon: '🧪',
  description: 'Running Jest/Vitest test suites to ensure logic correctness',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/calc-logic', 
      message: '🌱 Step 1: New Calculation Feature' 
    },
    { 
      action: 'commit', 
      branch: 'feature/calc-logic', 
      message: '❌ Step 2: Commit Impl -> TESTS FAIL' 
    },
    { 
      action: 'commit', 
      branch: 'feature/calc-logic', 
      message: '✅ Step 3: Fix Logic -> TESTS PASS' 
    },
    { 
      action: 'merge', 
      from: 'feature/calc-logic', 
      to: 'develop', 
      message: '🚀 Step 4: Merge Tested Code' 
    }
  ]
}

export const securityAudit = {
  id: 'security-audit',
  title: 'Security Audit',
  icon: '🔒',
  description: 'Scanning dependencies for vulnerabilities',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/deps-upgrade', 
      message: '🌱 Step 1: Upgrade Libraries' 
    },
    { 
      action: 'commit', 
      branch: 'feature/deps-upgrade', 
      message: '🚨 Step 2: Update lockfile (Security Audit: High Severity!)' 
    },
    { 
      action: 'commit', 
      branch: 'feature/deps-upgrade', 
      message: '✅ Step 3: Apply Patches (Audit Passed)' 
    },
    { 
      action: 'merge', 
      from: 'feature/deps-upgrade', 
      to: 'develop', 
      message: '🔒 Step 4: Merge Secure Deps' 
    }
  ]
}

export const buildVerify = {
  id: 'build-verify',
  title: 'Build Verification',
  icon: '🏗️',
  description: 'Checking if the application compiles/builds successfully',
  steps: [
    { 
      action: 'create-branch', 
      from: 'develop', 
      to: 'feature/ui-update', 
      message: '🌱 Step 1: UI Changes' 
    },
    { 
      action: 'commit', 
      branch: 'feature/ui-update', 
      message: '🏗️ Step 2: Commit -> Build runs...' 
    },
    { 
      action: 'commit', 
      branch: 'feature/ui-update', 
      message: '✅ Step 3: Fix syntax error -> Build Succeeded' 
    },
    { 
      action: 'merge', 
      from: 'feature/ui-update', 
      to: 'develop', 
      message: '🚀 Step 4: Merge' 
    }
  ]
}

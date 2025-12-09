
export const ciOnPush = {
  id: 'ci-on-push',
  title: 'CI on Push',
  icon: '🚀',
  description: 'Triggers linting and unit tests on every push to feature branches',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/ci-demo', message: 'Start feature' },
    { action: 'commit', branch: 'feature/ci-demo', message: 'Add functions (Triggers CI)' },
    { action: 'commit', branch: 'feature/ci-demo', message: 'Fix lint errors (Triggers CI again)' },
    { action: 'merge', from: 'feature/ci-demo', to: 'develop', message: 'Merge to develop' }
  ]
}

export const ciOnPR = {
  id: 'ci-on-pr',
  title: 'CI on Pull Request',
  icon: '👀',
  description: 'Runs strict checks only when a Pull Request is opened',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/pr-checks', message: 'Start feature' },
    { action: 'commit', branch: 'feature/pr-checks', message: 'Work in progress' },
    { action: 'commit', branch: 'feature/pr-checks', message: 'Complete feature' },
    { action: 'commit', branch: 'feature/pr-checks', message: 'Open PR (Triggers Checks)' },
    { action: 'merge', from: 'feature/pr-checks', to: 'develop', message: 'Merge PR' }
  ]
}

export const lintCheck = {
  id: 'lint-check',
  title: 'Linting Workflow',
  icon: '🧹',
  description: 'Automated code style checking and formatting',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/style-fix', message: 'Start fix' },
    { action: 'commit', branch: 'feature/style-fix', message: 'Add code with messy warnings' },
    { action: 'commit', branch: 'feature/style-fix', message: 'Auto-format runs (Commit from CI) ' },
    { action: 'merge', from: 'feature/style-fix', to: 'develop', message: 'Merge clean code' }
  ]
}

export const unitTests = {
  id: 'unit-tests',
  title: 'Unit Testing Suite',
  icon: '🧪',
  description: 'Running Jest/Vitest test suites to ensure logic correctness',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/calc-logic', message: 'New calculation logic' },
    { action: 'commit', branch: 'feature/calc-logic', message: 'Add impl (Tests Fail) ❌' },
    { action: 'commit', branch: 'feature/calc-logic', message: 'Fix logic (Tests Pass) ✅' },
    { action: 'merge', from: 'feature/calc-logic', to: 'develop', message: 'Merge tested code' }
  ]
}

export const securityAudit = {
  id: 'security-audit',
  title: 'Security Audit',
  icon: '🔒',
  description: 'Scanning dependencies for vulnerabilities',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/deps-upgrade', message: 'Upgrade libs' },
    { action: 'commit', branch: 'feature/deps-upgrade', message: 'Update package.json (Audit triggers)' },
    { action: 'commit', branch: 'feature/deps-upgrade', message: 'Fix vulnerabilities (Audit pass)' },
    { action: 'merge', from: 'feature/deps-upgrade', to: 'develop', message: 'Merge secure deps' }
  ]
}

export const buildVerify = {
  id: 'build-verify',
  title: 'Build Verification',
  icon: '🏗️',
  description: 'Checking if the application compiles/builds successfully',
  steps: [
    { action: 'create-branch', from: 'develop', to: 'feature/ui-update', message: 'UI changes' },
    { action: 'commit', branch: 'feature/ui-update', message: 'Add components (Build runs)' },
    { action: 'commit', branch: 'feature/ui-update', message: 'Fix build error' },
    { action: 'merge', from: 'feature/ui-update', to: 'develop', message: 'Merge' }
  ]
}

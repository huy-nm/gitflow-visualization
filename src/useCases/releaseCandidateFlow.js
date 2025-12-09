// Release Candidate Flow - QA iterations with bug fixes
export const releaseCandidateFlow = {
  id: 'release-candidate',
  title: 'Release Candidate Flow',
  icon: '🎯',
  description: 'QA testing release candidates, finding bugs, multiple RC iterations before final release',
  steps: [
    // Feature complete - start release process
    { action: 'create-branch', from: 'develop', to: 'release/3.0.0', message: 'Feature freeze - create release branch' },
    { action: 'commit', branch: 'release/3.0.0', message: 'Bump version to 3.0.0-rc.1' },
    { action: 'tag', branch: 'release/3.0.0', tag: 'v3.0.0-rc.1', message: 'Tag RC1 for QA testing' },
    
    // QA finds bugs in RC1
    { action: 'commit', branch: 'release/3.0.0', message: 'Fix: form validation not working on Safari' },
    { action: 'commit', branch: 'release/3.0.0', message: 'Fix: timezone offset in date picker' },
    
    // RC2 deployed
    { action: 'commit', branch: 'release/3.0.0', message: 'Bump version to 3.0.0-rc.2' },
    { action: 'tag', branch: 'release/3.0.0', tag: 'v3.0.0-rc.2', message: 'Tag RC2 for regression testing' },
    
    // One more bug found
    { action: 'commit', branch: 'release/3.0.0', message: 'Fix: edge case in user session handling' },
    { action: 'commit', branch: 'release/3.0.0', message: 'Bump version to 3.0.0' },
    
    // QA sign-off - release!
    { action: 'merge', from: 'release/3.0.0', to: 'main', message: 'QA approved - merge to main' },
    { action: 'tag', branch: 'main', tag: 'v3.0.0', message: 'Production release v3.0.0' },
    { action: 'merge', from: 'release/3.0.0', to: 'develop', message: 'Merge bugfixes back to develop' },
    { action: 'delete-branch', branch: 'release/3.0.0', message: 'Release complete, cleanup' }
  ]
}

// Senior Use Cases
export { cherryPickFix } from './cherryPickFix'
export { rebaseVsMerge } from './rebaseVsMerge'
export { monorepoRelease } from './monorepoRelease'
export { rollbackStrategy } from './rollbackStrategy'
export { branchProtection } from './branchProtection'

import { cherryPickFix } from './cherryPickFix'
import { rebaseVsMerge } from './rebaseVsMerge'
import { monorepoRelease } from './monorepoRelease'
import { rollbackStrategy } from './rollbackStrategy'
import { branchProtection } from './branchProtection'

export const seniorUseCases = [
  cherryPickFix,
  rebaseVsMerge,
  monorepoRelease,
  rollbackStrategy,
  branchProtection
]

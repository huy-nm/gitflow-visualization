// Intermediate Use Cases
export { syncWithTeam } from './syncWithTeam'
export { codeReviewCycle } from './codeReviewCycle'
export { featureBranchCleanup } from './featureBranchCleanup'
export { bugFoundInPR } from './bugFoundInPR'
export { parallelWork } from './parallelWork'

import { syncWithTeam } from './syncWithTeam'
import { codeReviewCycle } from './codeReviewCycle'
import { featureBranchCleanup } from './featureBranchCleanup'
import { bugFoundInPR } from './bugFoundInPR'
import { parallelWork } from './parallelWork'

export const intermediateUseCases = [
  syncWithTeam,
  codeReviewCycle,
  featureBranchCleanup,
  bugFoundInPR,
  parallelWork
]

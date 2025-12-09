// GitFlow Use Cases - Production-Grade Team Workflows

// Core Production Workflows
export { sprintDevelopment } from './sprintDevelopment'
export { criticalHotfix } from './criticalHotfix'
export { releaseCandidateFlow } from './releaseCandidateFlow'
export { longRunningFeature } from './longRunningFeature'
export { trunkBasedDev } from './trunkBasedDev'

// Legacy (keeping for backwards compatibility)
export { featureDevelopment } from './featureDevelopment'
export { releaseProcess } from './releaseProcess'
export { hotfixWorkflow } from './hotfixWorkflow'

// Import for combined array
import { sprintDevelopment } from './sprintDevelopment'
import { criticalHotfix } from './criticalHotfix'
import { releaseCandidateFlow } from './releaseCandidateFlow'
import { longRunningFeature } from './longRunningFeature'
import { trunkBasedDev } from './trunkBasedDev'

// Production-grade use cases for teams
export const allUseCases = [
  sprintDevelopment,
  criticalHotfix,
  releaseCandidateFlow,
  longRunningFeature,
  trunkBasedDev
]

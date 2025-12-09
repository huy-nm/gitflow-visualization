// GitFlow Use Cases - Central Export
export { featureDevelopment } from './featureDevelopment'
export { releaseProcess } from './releaseProcess'
export { hotfixWorkflow } from './hotfixWorkflow'
export { parallelFeatures } from './parallelFeatures'
export { bugfixWorkflow } from './bugfixWorkflow'
export { fullSprint } from './fullSprint'

// Combined array for convenience
import { featureDevelopment } from './featureDevelopment'
import { releaseProcess } from './releaseProcess'
import { hotfixWorkflow } from './hotfixWorkflow'
import { parallelFeatures } from './parallelFeatures'
import { bugfixWorkflow } from './bugfixWorkflow'
import { fullSprint } from './fullSprint'

export const allUseCases = [
  featureDevelopment,
  releaseProcess,
  hotfixWorkflow,
  parallelFeatures,
  bugfixWorkflow,
  fullSprint
]

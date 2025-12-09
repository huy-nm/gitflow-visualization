// GitFlow Use Cases - Central Export
export { featureDevelopment } from './featureDevelopment'
export { releaseProcess } from './releaseProcess'
export { hotfixWorkflow } from './hotfixWorkflow'
export { parallelFeatures } from './parallelFeatures'
export { bugfixWorkflow } from './bugfixWorkflow'
export { fullSprint } from './fullSprint'

// New CI/CD Groups
export * from './basicCI'
export * from './continuousDelivery'
export * from './advancedDeployment'
export * from './maintenanceAndAutomation'

// Combined array for convenience
import { featureDevelopment } from './featureDevelopment'
import { releaseProcess } from './releaseProcess'
import { hotfixWorkflow } from './hotfixWorkflow'
import { parallelFeatures } from './parallelFeatures'
import { bugfixWorkflow } from './bugfixWorkflow'
import { fullSprint } from './fullSprint'

import * as basicCI from './basicCI'
import * as continuousDelivery from './continuousDelivery'
import * as advancedDeployment from './advancedDeployment'
import * as maintenanceAndAutomation from './maintenanceAndAutomation'

export const allUseCases = [
  // Original GitFlow
  featureDevelopment,
  releaseProcess,
  hotfixWorkflow,
  parallelFeatures,
  bugfixWorkflow,
  fullSprint,
  
  // Basic CI
  ...Object.values(basicCI),
  
  // Continuous Delivery
  ...Object.values(continuousDelivery),
  
  // Advanced Deployment
  ...Object.values(advancedDeployment),
  
  // Maintenance
  ...Object.values(maintenanceAndAutomation)
]

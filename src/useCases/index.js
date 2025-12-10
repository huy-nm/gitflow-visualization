// GitFlow Use Cases - Organized by Skill Level

// Category imports
import { beginnerUseCases } from './beginner'
import { intermediateUseCases } from './intermediate'
import { seniorUseCases } from './senior'

// Real-World Production (existing)
import { sprintDevelopment } from './sprintDevelopment'
import { criticalHotfix } from './criticalHotfix'
import { releaseCandidateFlow } from './releaseCandidateFlow'
import { longRunningFeature } from './longRunningFeature'
import { trunkBasedDev } from './trunkBasedDev'
import { stagingProductionDeploy } from './stagingProductionDeploy'

export const realWorldUseCases = [
  sprintDevelopment,
  criticalHotfix,
  releaseCandidateFlow,
  longRunningFeature,
  trunkBasedDev,
  stagingProductionDeploy
]

// Export categories
export { beginnerUseCases } from './beginner'
export { intermediateUseCases } from './intermediate'
export { seniorUseCases } from './senior'

// Export individual use cases
export * from './beginner'
export * from './intermediate'
export * from './senior'
export { sprintDevelopment } from './sprintDevelopment'
export { criticalHotfix } from './criticalHotfix'
export { releaseCandidateFlow } from './releaseCandidateFlow'
export { longRunningFeature } from './longRunningFeature'
export { trunkBasedDev } from './trunkBasedDev'
export { stagingProductionDeploy } from './stagingProductionDeploy'

// Categorized use cases for UI
export const useCasesByCategory = {
  beginner: {
    title: '🟢 Beginner',
    description: 'Learn Git basics step by step',
    useCases: beginnerUseCases
  },
  intermediate: {
    title: '🟡 Intermediate', 
    description: 'Team collaboration workflows',
    useCases: intermediateUseCases
  },
  senior: {
    title: '🔴 Senior',
    description: 'Advanced Git techniques',
    useCases: seniorUseCases
  },
  realWorld: {
    title: '🏢 Real-World',
    description: 'Production team scenarios',
    useCases: realWorldUseCases
  }
}

// All use cases flat array
export const allUseCases = [
  ...beginnerUseCases,
  ...intermediateUseCases,
  ...seniorUseCases,
  ...realWorldUseCases
]

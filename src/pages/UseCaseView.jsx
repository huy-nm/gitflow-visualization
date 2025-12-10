
import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { allUseCases } from '../useCases'
import UseCasePanel from '../components/UseCasePanel'

const UseCaseView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Find use case derived from ID - using useMemo to avoid re-calculation
  const selectedUseCase = useMemo(() => {
    return allUseCases.find(uc => uc.id === id)
  }, [id])

  // Panel State
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  // Redirect if not found (pure side effect in render is bad, but effect is better for nav)
  // However, we can just render null/redirect component if not found
  if (!selectedUseCase) {
    // Navigate in effect to avoid render cycle issues
    setTimeout(() => navigate('/'), 0)
    return null
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleStepChange = (step) => {
    setCurrentStep(step)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setIsPlaying(false)
  }

  return (
    <UseCasePanel 
      // Key forces remount when ID changes, resetting state automatically
      key={selectedUseCase.id} 
      useCase={selectedUseCase}
      currentStep={currentStep}
      isPlaying={isPlaying}
      onPlayPause={handlePlayPause}
      onStepChange={handleStepChange}
      onReset={handleReset}
      onStepComplete={() => {
        if (currentStep < selectedUseCase.steps.length - 1) {
          setCurrentStep(prev => prev + 1)
        } else {
          setIsPlaying(false)
        }
      }}
    />
  )
}

export default UseCaseView

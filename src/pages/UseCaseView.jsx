
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { allUseCases } from '../useCases'
import UseCasePanel from '../components/UseCasePanel'

const UseCaseView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedUseCase, setSelectedUseCase] = useState(null)
  
  // Panel State
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const found = allUseCases.find(uc => uc.id === id)
    if (found) {
      setSelectedUseCase(found)
      // Reset state when use case changes
      setCurrentStep(0)
      setIsPlaying(false)
    } else {
      // Handle not found - redirect to home
      navigate('/')
    }
  }, [id, navigate])

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

  if (!selectedUseCase) return null

  return (
    <UseCasePanel 
      useCase={selectedUseCase}
      currentStep={currentStep}
      isPlaying={isPlaying}
      onPlayPause={handlePlayPause}
      onStepChange={handleStepChange}
      onReset={handleReset}
      onBack={() => navigate('/')}
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

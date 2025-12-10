
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from '../i18n'
import { useCasesByCategory } from '../useCases'
import UseCaseCard from '../components/UseCaseCard'

const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('beginner')

  const handleSelectUseCase = (useCase) => {
    navigate(`/use-case/${useCase.id}`)
  }

  return (
    <div className="flex-1 flex flex-col items-center p-8 overflow-y-auto gap-8">
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold m-0 mb-4 bg-gradient-to-br from-ctp-blue to-ctp-mauve bg-clip-text text-transparent -tracking-[0.02em]">
          {t('app.welcome')}
        </h2>
        <p className="text-[var(--text-secondary)] text-lg m-0 leading-relaxed">
          {t('app.welcomeDescription')}
        </p>
      </div>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {Object.entries(useCasesByCategory).map(([key]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 border-2 ${
              activeCategory === key
                ? 'bg-gradient-to-r from-ctp-blue to-ctp-mauve text-white border-transparent shadow-lg scale-105'
                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-ctp-blue hover:text-ctp-blue hover:-translate-y-0.5'
            }`}
          >
            <span className="mr-2">{t(`categories.${key}.title`).split(' ')[0]}</span>
            <span>{t(`categories.${key}.title`).split(' ').slice(1).join(' ')}</span>
          </button>
        ))}
      </div>
      
      {/* Category Description */}
      <p className="text-[var(--text-muted)] text-sm m-0">
        {t(`categories.${activeCategory}.description`)}
      </p>
      
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
        {useCasesByCategory[activeCategory]?.useCases.map(useCase => (
          <UseCaseCard
            key={useCase.id}
            useCase={useCase}
            isActive={false}
            onClick={() => handleSelectUseCase(useCase)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home

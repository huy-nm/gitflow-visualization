
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from '../i18n'
import { useCasesByCategory } from '../useCases'
import UseCaseCard from '../components/UseCaseCard'
import { Plant, Sparkle, ShieldCheck, Buildings } from '@phosphor-icons/react'

const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('beginner')

  const handleSelectUseCase = (useCase) => {
    navigate(`/use-case/${useCase.id}`)
  }

  return (
    <div className="flex-1 flex flex-col items-center p-8 overflow-y-auto gap-8">
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold m-0 mb-4 bg-gradient-to-br from-ctp-blue to-ctp-mauve bg-clip-text text-transparent -tracking-[0.02em] whitespace-nowrap overflow-hidden text-ellipsis px-4">
          {t('app.welcome')}
        </h2>
        <p className="text-[var(--text-secondary)] text-lg m-0 leading-relaxed max-w-2xl mx-auto">
          {t('app.welcomeDescription')}
        </p>
      </div>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(useCasesByCategory).map(([key]) => {
          // color mapping based on key
          const colorMap = {
            beginner: 'ctp-green',
            intermediate: 'ctp-yellow',
            senior: 'ctp-red',
            realWorld: 'ctp-mauve', // updated from 'advanced' to 'realWorld' to match json
          }
          const color = colorMap[key] || 'ctp-blue'
          
          // Icons
          const icons = {
            beginner: <Plant size={24} weight="fill" />,
            intermediate: <Sparkle size={24} weight="fill" />,
            senior: <ShieldCheck size={24} weight="fill" />,
            realWorld: <Buildings size={24} weight="fill" />
          }

          const icon = icons[key] || icons.beginner
          // Strip existing emoji from title if present (e.g. "🟢 Beginner" -> "Beginner")
          const fullTitle = t(`categories.${key}.title`)
          // Regex to remove leading non-word chars (emojis) and spaces
          const cleanTitle = fullTitle.replace(/^[\W\s]+/, '')

          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group relative px-6 py-3 rounded-2xl font-bold transition-all duration-300 border ${
                activeCategory === key
                  ? `bg-${color}/10 border-${color} text-${color} shadow-[0_0_20px_-5px_var(--${color})] scale-105`
                  : `bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-${color} hover:text-${color} hover:-translate-y-0.5`
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="scale-110">{icon}</span>
                <span>{cleanTitle || fullTitle}</span>
              </div>
            </button>
          )
        })}
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

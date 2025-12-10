
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
            beginner: (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.0002 3C12.446 3 12.8257 3.32168 12.9126 3.7505L13.1956 5.15174C13.67 7.4988 15.6881 9.30932 18.2323 8.7847C18.7303 8.68202 19.1417 9.15783 18.9953 9.64295C18.2713 12.0416 16.0371 13.8466 13.3156 13.9877L13.0002 14V21C13.0002 21.5523 12.5525 22 12.0002 22C11.448 22 11.0002 21.5523 11.0002 21V13.9865L10.6695 13.9856C7.94273 13.8291 5.70776 12.0152 4.99614 9.61053C4.85233 9.12456 5.26629 8.65171 5.76451 8.75698C8.30728 9.29424 10.3235 7.48512 10.8003 5.14138L11.0874 3.7505C11.1743 3.32168 11.554 3 12.0002 3Z"></path></svg>
            ),
            intermediate: (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg>
            ),
            senior: (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H7V10.99H17V11.99H12Z"></path></svg>
            ),
            realWorld: (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17 11V3H7V11H3V21H21V11H17ZM9 5H15V11H9V5ZM19 19H5V13H19V19Z"></path><rect x="7" y="15" width="2" height="2"></rect><rect x="11" y="15" width="2" height="2"></rect><rect x="15" y="15" width="2" height="2"></rect></svg>
            )
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

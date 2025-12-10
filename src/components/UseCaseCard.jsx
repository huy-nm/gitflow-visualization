// import './UseCaseCard.css' - CSS replaced by Tailwind
// Replaced complex CSS animations/gradients with standard Tailwind + custom styles where needed.
// Note: For complex multi-layer gradients or masks, might simplify or use style props if needed, 
// but Tailwind can handle most via utilities.

import { useTranslation } from '../i18n'
import { getUseCaseIcon } from './UseCaseIcon'
import { cloneElement } from 'react'

function UseCaseCard({ useCase, isActive, onClick }) {
  const { t } = useTranslation()
  
  // Get translated use case title and description
  const useCaseId = useCase.id.replace(/-/g, '').replace(/([A-Z])/g, (m) => m.toLowerCase())
  const translatedTitle = t(`useCases.${useCaseId}.title`) !== `useCases.${useCaseId}.title` 
    ? t(`useCases.${useCaseId}.title`) 
    : useCase.title
  const translatedDescription = t(`useCases.${useCaseId}.description`) !== `useCases.${useCaseId}.description`
    ? t(`useCases.${useCaseId}.description`)
    : useCase.description

  return (
    <button 
      className={`
        group relative flex flex-col gap-4 p-6 
        bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl 
        cursor-pointer text-left transition-all duration-400 ease-out overflow-hidden shadow-sm
        hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-300/20 hover:bg-[var(--bg-card-hover)]
        ${isActive ? '!bg-[var(--bg-card-hover)] border-transparent shadow shadow-[var(--ctp-blue)] ring-1 ring-[var(--ctp-blue)]' : ''}
      `}
      onClick={onClick}
    >
      {/* Search/Active Gradient Border Effect using pseudo-element approximation */}
      <div className={`absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-br from-ctp-blue via-ctp-mauve to-ctp-peach opacity-0 transition-opacity duration-400 group-hover:opacity-100 ${isActive ? 'opacity-100' : ''} pointer-events-none`} 
           style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}>
      </div>
      
      {/* Category Colors */}
      {(() => {
        const colors = {
          beginner: 'text-ctp-green border-ctp-green bg-ctp-green/10',
          intermediate: 'text-ctp-yellow border-ctp-yellow bg-ctp-yellow/10',
          senior: 'text-ctp-red border-ctp-red bg-ctp-red/10',
          realWorld: 'text-ctp-mauve border-ctp-mauve bg-ctp-mauve/10'
        }
        const colorClass = colors[useCase.category] || 'text-ctp-blue border-ctp-blue bg-ctp-blue/10'
        
        return (
          <div className="flex justify-between items-start w-full z-10 mb-4">
            <div className="card-icon transition-transform duration-400 ease-out group-hover:scale-110 group-hover:rotate-6">
              {cloneElement(getUseCaseIcon(useCase.id, useCase.category), { size: 42 })}
            </div>
            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full border ${colorClass}`}>
              {useCase.category === 'realWorld' ? 'Real-World' : useCase.category}
            </span>
          </div>
        )
      })()}
      
      <div className="flex-1 z-10">
        <h3 className="m-0 mb-2 text-lg font-bold text-[var(--text-primary)] tracking-tight">
          {translatedTitle}
        </h3>
        <p className="m-0 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {translatedDescription}
        </p>
      </div>
      
      <div className="flex items-center justify-end mt-auto z-10 w-full opacity-60">
        <span className="text-xs font-medium text-[var(--text-secondary)]">
          {useCase.steps.length} {t('panel.step').toLowerCase()}s
        </span>
      </div>
    </button>
  )
}

export default UseCaseCard


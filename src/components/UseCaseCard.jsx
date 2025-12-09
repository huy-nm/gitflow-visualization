// import './UseCaseCard.css' - CSS replaced by Tailwind
// Replaced complex CSS animations/gradients with standard Tailwind + custom styles where needed.
// Note: For complex multi-layer gradients or masks, might simplify or use style props if needed, 
// but Tailwind can handle most via utilities.

function UseCaseCard({ useCase, isActive, onClick }) {
  return (
    <button 
      className={`
        group relative flex flex-col gap-4 p-6 
        bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl 
        cursor-pointer text-left transition-all duration-400 ease-out overflow-hidden shadow-sm
        hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-300/20 hover:bg-[var(--bg-card-hover)]
        ${isActive ? '!bg-[var(--bg-card-hover)] border-transparent shadow shadow-[var(--ctp-blue)] ring-1 ring-[var(--ctp-blue)]' : ''}
      `}
      onClick={onClick}
    >
      {/* Search/Active Gradient Border Effect using pseudo-element approximation */}
      <div className={`absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-br from-ctp-blue via-ctp-mauve to-ctp-peach opacity-0 transition-opacity duration-400 group-hover:opacity-100 ${isActive ? 'opacity-100' : ''} pointer-events-none`} 
           style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none"></div>

      <div className="card-icon text-[42px] leading-none drop-shadow-md transition-transform duration-400 ease-out group-hover:scale-110 group-hover:rotate-6 z-10">
        {useCase.icon}
      </div>
      
      <div className="flex-1 z-10">
        <h3 className="m-0 mb-2 text-lg font-bold text-[var(--text-primary)] tracking-tight">
          {useCase.title}
        </h3>
        <p className="m-0 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {useCase.description}
        </p>
      </div>
      
      <div className="flex items-center justify-between mt-auto z-10 w-full">
        <span className="text-xs font-semibold text-ctp-blue bg-blue-400/10 px-3 py-1.5 rounded-xl transition-all duration-300 group-hover:bg-ctp-blue group-hover:text-ctp-base">
          {useCase.steps.length} steps
        </span>
      </div>
    </button>
  )
}

export default UseCaseCard

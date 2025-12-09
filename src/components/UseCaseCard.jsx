import './UseCaseCard.css'

function UseCaseCard({ useCase, isActive, onClick }) {
  return (
    <button 
      className={`use-case-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="card-icon">{useCase.icon}</div>
      <div className="card-content">
        <h3 className="card-title">{useCase.title}</h3>
        <p className="card-description">{useCase.description}</p>
      </div>
      <div className="card-meta">
        <span className="step-count">{useCase.steps.length} steps</span>
      </div>
    </button>
  )
}

export default UseCaseCard

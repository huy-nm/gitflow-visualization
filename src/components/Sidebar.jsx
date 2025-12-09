import './Sidebar.css'

function Sidebar({ useCases, selectedUseCase, onSelectUseCase }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>📚 Use Cases</h2>
        <p>Click to explore</p>
      </div>
      
      <nav className="sidebar-nav">
        {useCases.map(useCase => (
          <button
            key={useCase.id}
            className={`use-case-btn ${selectedUseCase?.id === useCase.id ? 'active' : ''}`}
            onClick={() => onSelectUseCase(useCase)}
          >
            <span className="use-case-icon">{useCase.icon}</span>
            <div className="use-case-info">
              <strong>{useCase.title}</strong>
              <span>{useCase.description}</span>
            </div>
            <span className="use-case-steps">{useCase.steps.length} steps</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="tips-card">
          <h4>💡 Tips</h4>
          <ul>
            <li>Use the playback controls to animate</li>
            <li>Click on steps to jump to them</li>
            <li>Hover over commits for details</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

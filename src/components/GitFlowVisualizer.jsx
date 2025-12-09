import { useState, useEffect, useRef } from 'react'
import './GitFlowVisualizer.css'

const BRANCH_COLORS = {
  main: '#238636',
  develop: '#1f6feb',
  'feature': '#a371f7',
  'release': '#f0883e',
  'hotfix': '#f85149',
  'bugfix': '#db61a2'
}

function getBranchColor(branchName) {
  if (branchName === 'main' || branchName === 'master') return BRANCH_COLORS.main
  if (branchName === 'develop') return BRANCH_COLORS.develop
  if (branchName.startsWith('feature/')) return BRANCH_COLORS.feature
  if (branchName.startsWith('release/')) return BRANCH_COLORS.release
  if (branchName.startsWith('hotfix/')) return BRANCH_COLORS.hotfix
  if (branchName.startsWith('bugfix/')) return BRANCH_COLORS.bugfix
  return '#8b949e'
}

function getBranchType(branchName) {
  if (branchName === 'main' || branchName === 'master') return 'main'
  if (branchName === 'develop') return 'develop'
  if (branchName.startsWith('feature/')) return 'feature'
  if (branchName.startsWith('release/')) return 'release'
  if (branchName.startsWith('hotfix/')) return 'hotfix'
  if (branchName.startsWith('bugfix/')) return 'bugfix'
  return 'other'
}

function GitFlowVisualizer({ useCase, currentStep, isPlaying, onStepComplete }) {
  const [branches, setBranches] = useState([])
  const [commits, setCommits] = useState([])
  const [merges, setMerges] = useState([])
  const [tags, setTags] = useState([])
  const [animatingCommit, setAnimatingCommit] = useState(null)
  const containerRef = useRef(null)
  
  // Reset when use case changes
  useEffect(() => {
    setBranches([
      { name: 'main', y: 50, commits: [{ id: 'initial-main', x: 50, message: 'Initial commit' }] },
      { name: 'develop', y: 120, commits: [{ id: 'initial-develop', x: 80, message: 'Start development' }] }
    ])
    setCommits([])
    setMerges([{ from: { x: 50, y: 50 }, to: { x: 80, y: 120 }, id: 'init-merge' }])
    setTags([])
    setAnimatingCommit(null)
  }, [useCase.id])
  
  // Process steps
  useEffect(() => {
    if (currentStep < 0) return
    
    const stepsToProcess = useCase.steps.slice(0, currentStep + 1)
    const newBranches = [
      { name: 'main', y: 50, commits: [{ id: 'initial-main', x: 50, message: 'Initial commit' }], deleted: false },
      { name: 'develop', y: 120, commits: [{ id: 'initial-develop', x: 80, message: 'Start development' }], deleted: false }
    ]
    const newMerges = [{ from: { x: 50, y: 50 }, to: { x: 80, y: 120 }, id: 'init-merge' }]
    const newTags = []
    
    let currentX = 140
    const branchYPositions = { main: 50, develop: 120 }
    let nextY = 190
    
    stepsToProcess.forEach((step, stepIndex) => {
      switch (step.action) {
        case 'create-branch': {
          const fromBranch = newBranches.find(b => b.name === step.from)
          if (fromBranch) {
            const lastCommit = fromBranch.commits[fromBranch.commits.length - 1]
            branchYPositions[step.to] = nextY
            newBranches.push({
              name: step.to,
              y: nextY,
              commits: [{ id: `${step.to}-start`, x: currentX, message: `Branch from ${step.from}` }],
              deleted: false
            })
            newMerges.push({
              from: { x: lastCommit.x, y: fromBranch.y },
              to: { x: currentX, y: nextY },
              id: `create-${step.to}`
            })
            nextY += 70
            currentX += 60
          }
          break
        }
        case 'commit': {
          const branch = newBranches.find(b => b.name === step.branch)
          if (branch) {
            const lastCommit = branch.commits[branch.commits.length - 1]
            branch.commits.push({
              id: `${step.branch}-${stepIndex}`,
              x: currentX,
              message: step.message
            })
            currentX += 60
          }
          break
        }
        case 'merge': {
          const fromBranch = newBranches.find(b => b.name === step.from)
          const toBranch = newBranches.find(b => b.name === step.to)
          if (fromBranch && toBranch) {
            const fromCommit = fromBranch.commits[fromBranch.commits.length - 1]
            toBranch.commits.push({
              id: `merge-${step.from}-to-${step.to}`,
              x: currentX,
              message: `Merge ${step.from}`,
              isMerge: true
            })
            newMerges.push({
              from: { x: fromCommit.x, y: fromBranch.y },
              to: { x: currentX, y: toBranch.y },
              id: `merge-${stepIndex}`
            })
            currentX += 60
          }
          break
        }
        case 'delete-branch': {
          const branch = newBranches.find(b => b.name === step.branch)
          if (branch) {
            branch.deleted = true
          }
          break
        }
        case 'tag': {
          const branch = newBranches.find(b => b.name === step.branch)
          if (branch) {
            const lastCommit = branch.commits[branch.commits.length - 1]
            newTags.push({
              id: step.tag,
              x: lastCommit.x,
              y: branch.y,
              name: step.tag
            })
          }
          break
        }
      }
    })
    
    setBranches(newBranches)
    setMerges(newMerges)
    setTags(newTags)
    
    // Set animating commit
    const lastStep = useCase.steps[currentStep]
    if (lastStep?.action === 'commit') {
      const branch = newBranches.find(b => b.name === lastStep.branch)
      if (branch) {
        const lastCommit = branch.commits[branch.commits.length - 1]
        setAnimatingCommit(lastCommit?.id)
        setTimeout(() => setAnimatingCommit(null), 600)
      }
    }
  }, [currentStep, useCase.steps])
  
  // Auto-play
  useEffect(() => {
    if (!isPlaying) return
    
    const timer = setTimeout(() => {
      onStepComplete()
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [isPlaying, currentStep, onStepComplete])
  
  const svgWidth = Math.max(800, branches.reduce((max, b) => {
    const lastCommit = b.commits[b.commits.length - 1]
    return Math.max(max, (lastCommit?.x || 0) + 100)
  }, 0))
  
  const svgHeight = Math.max(300, branches.length * 70 + 100)

  return (
    <div className="gitflow-visualizer" ref={containerRef}>
      <div className="visualizer-header">
        <h3>Branch Visualization</h3>
        <div className="branch-legend-mini">
          {Array.from(new Set(branches.filter(b => !b.deleted).map(b => getBranchType(b.name)))).map(type => (
            <span key={type} className="legend-chip" style={{ '--chip-color': BRANCH_COLORS[type] }}>
              {type}
            </span>
          ))}
        </div>
      </div>
      
      <div className="svg-container">
        <svg width={svgWidth} height={svgHeight} className="gitflow-svg">
          <defs>
            {/* Glow filters */}
            {Object.entries(BRANCH_COLORS).map(([type, color]) => (
              <filter key={type} id={`glow-${type}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            ))}
            
            {/* Arrow marker */}
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#8b949e"/>
            </marker>
          </defs>
          
          {/* Branch lines */}
          {branches.filter(b => !b.deleted).map(branch => {
            const color = getBranchColor(branch.name)
            const startX = branch.commits[0]?.x || 0
            const endX = branch.commits[branch.commits.length - 1]?.x || 0
            
            return (
              <g key={branch.name} className="branch-group">
                {/* Branch line */}
                <line
                  x1={startX}
                  y1={branch.y}
                  x2={endX}
                  y2={branch.y}
                  stroke={color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="branch-line"
                />
                
                {/* Branch label */}
                <g transform={`translate(${startX - 10}, ${branch.y})`}>
                  <rect
                    x={-Math.min(branch.name.length * 7 + 10, 120)}
                    y="-12"
                    width={Math.min(branch.name.length * 7 + 10, 120)}
                    height="24"
                    rx="4"
                    fill={color}
                    fillOpacity="0.2"
                    stroke={color}
                    strokeWidth="1"
                  />
                  <text
                    x={-Math.min(branch.name.length * 7 + 10, 120) / 2}
                    y="5"
                    fill={color}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="600"
                    textAnchor="middle"
                  >
                    {branch.name.length > 15 ? branch.name.slice(0, 15) + '...' : branch.name}
                  </text>
                </g>
                
                {/* Commits */}
                {branch.commits.map((commit, i) => (
                  <g 
                    key={commit.id}
                    transform={`translate(${commit.x}, ${branch.y})`}
                    className={`commit-node ${animatingCommit === commit.id ? 'animating' : ''} ${commit.isMerge ? 'merge-commit' : ''}`}
                  >
                    <circle
                      r={commit.isMerge ? 10 : 8}
                      fill={commit.isMerge ? '#161b22' : color}
                      stroke={color}
                      strokeWidth={commit.isMerge ? 3 : 2}
                      className="commit-circle"
                    />
                    {/* Commit message tooltip */}
                    <title>{commit.message}</title>
                    
                    {/* Show commit message for last commit */}
                    {i === branch.commits.length - 1 && (
                      <text
                        y="25"
                        fill="#8b949e"
                        fontSize="10"
                        textAnchor="middle"
                        className="commit-message"
                      >
                        {commit.message.length > 20 ? commit.message.slice(0, 20) + '...' : commit.message}
                      </text>
                    )}
                  </g>
                ))}
              </g>
            )
          })}
          
          {/* Merge arrows */}
          {merges.map(merge => (
            <path
              key={merge.id}
              d={`M ${merge.from.x} ${merge.from.y} C ${merge.from.x + 30} ${merge.from.y}, ${merge.to.x - 30} ${merge.to.y}, ${merge.to.x} ${merge.to.y}`}
              fill="none"
              stroke="#8b949e"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="merge-arrow"
              opacity="0.6"
            />
          ))}
          
          {/* Tags */}
          {tags.map(tag => (
            <g key={tag.id} transform={`translate(${tag.x}, ${tag.y - 25})`} className="tag-node">
              <rect
                x="-25"
                y="-10"
                width="50"
                height="20"
                rx="4"
                fill="#ffd700"
                fillOpacity="0.2"
                stroke="#ffd700"
              />
              <text
                y="4"
                fill="#ffd700"
                fontSize="10"
                fontWeight="600"
                textAnchor="middle"
              >
                🏷️ {tag.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
      
      {/* Deleted branches indicator */}
      {branches.filter(b => b.deleted).length > 0 && (
        <div className="deleted-branches">
          <span className="deleted-label">🗑️ Deleted:</span>
          {branches.filter(b => b.deleted).map(b => (
            <span key={b.name} className="deleted-branch">{b.name}</span>
          ))}
        </div>
      )}
      
      {/* Current action display */}
      <div className="action-display">
        <div className="action-content">
          <span className="action-step">Step {currentStep + 1}</span>
          <span className="action-text">{useCase.steps[currentStep]?.message}</span>
        </div>
      </div>
    </div>
  )
}

export default GitFlowVisualizer

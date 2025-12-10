import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'
import { Tag, GitCommit, GitBranch, Package, Fire, Bug, Rocket, Flask } from '@phosphor-icons/react'

// Catppuccin Latte colors
const BRANCH_COLORS = {
  main: '#40a02b',
  develop: '#1e66f5',
  feature: '#8839ef',
  release: '#fe640b',
  hotfix: '#d20f39',
  bugfix: '#ea76cb',
  staging: '#df8e1d',    // Bright yellow/orange for staging
  production: '#e64553'  // Bright red/pink for production
}

// Custom Commit Node
export const CommitNode = memo(({ data }) => {
  const color = BRANCH_COLORS[data.branchType] || '#6c6f85'
  const size = data.isMerge ? 14 : 12
  
  return (
    <div 
      style={{ 
        width: size,
        height: size,
        position: 'relative'
      }}
    >
      <Handle 
        type="target" 
        position={Position.Left}
        style={{ 
          background: 'transparent', 
          border: 'none',
          width: 1,
          height: 1,
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)'
        }} 
      />
      <div 
        style={{ 
          width: size,
          height: size,
          borderRadius: '50%',
          background: data.isMerge ? '#eff1f5' : color,
          border: `2px solid ${color}`,
          boxShadow: data.isActive ? `0 0 10px ${color}` : `0 0 3px ${color}50`,
          transition: 'transform 0.2s, box-shadow 0.2s',
          transform: data.isActive ? 'scale(1.2)' : 'scale(1)'
        }}
      />
      <Handle 
        type="source" 
        position={Position.Right}
        style={{ 
          background: 'transparent', 
          border: 'none',
          width: 1,
          height: 1,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)'
        }} 
      />
    </div>
  )
})

CommitNode.displayName = 'CommitNode'

// Branch Label Node - left aligned
export const BranchLabelNode = memo(({ data }) => {
  const color = BRANCH_COLORS[data.branchType] || '#6c6f85'
  
  const getIcon = (type) => {
    if (type?.startsWith('feature')) return <GitBranch size={12} weight="bold" />
    if (type?.startsWith('release')) return <Package size={12} weight="fill" />
    if (type?.startsWith('hotfix')) return <Fire size={12} weight="fill" />
    if (type?.startsWith('bugfix')) return <Bug size={12} weight="fill" />
    if (type === 'production') return <Rocket size={12} weight="fill" />
    if (type === 'staging') return <Flask size={12} weight="fill" />
    return <GitCommit size={12} weight="bold" /> // main, develop
  }
  
  return (
    <div 
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: '12px',
        border: `1.5px solid ${color}`,
        background: `${color}18`,
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: "'JetBrains Mono', monospace",
        color: '#4c4f69',
        whiteSpace: 'nowrap',
        opacity: data.deleted ? 0.4 : 1
      }}
    >
      <span style={{ color: color, display: 'flex' }}>
        {getIcon(data.branchType)}
      </span>
      <span>{data.label}</span>
    </div>
  )
})

BranchLabelNode.displayName = 'BranchLabelNode'

// Tag Node
export const TagNode = memo(({ data }) => {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '2px 6px',
        background: 'rgba(223, 142, 29, 0.15)',
        border: '1px solid #df8e1d',
        borderRadius: '4px',
        fontSize: '9px',
        fontWeight: 600,
        color: '#df8e1d',
        whiteSpace: 'nowrap'
      }}
    >
      <Tag size={12} weight="fill" />
      <span style={{ fontFamily: 'monospace' }}>{data.label}</span>
    </div>
  )
})

TagNode.displayName = 'TagNode'

// Environment Node (Staging/Production)
export const EnvironmentNode = memo(({ data }) => {
  const bgColor = data.environment === 'production' 
    ? 'rgba(64, 160, 43, 0.15)' 
    : 'rgba(223, 142, 29, 0.15)'
  const borderColor = data.environment === 'production' ? '#40a02b' : '#df8e1d'
  const textColor = data.environment === 'production' ? '#40a02b' : '#df8e1d'
  
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        background: bgColor,
        border: `2px solid ${borderColor}`,
        borderRadius: '8px',
        fontSize: '10px',
        fontWeight: 700,
        color: textColor,
        whiteSpace: 'nowrap',
        boxShadow: data.isActive ? `0 0 12px ${borderColor}` : 'none',
        transform: data.isActive ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.2s ease'
      }}
    >
      <span>{data.label}</span>
    </div>
  )
})

EnvironmentNode.displayName = 'EnvironmentNode'

// Custom edge - bezier curve for different Y, straight for same Y
export const BranchEdge = memo(({ 
  id, 
  sourceX, 
  sourceY, 
  targetX, 
  targetY,
  style = {},
  markerEnd
}) => {
  let edgePath
  
  // If same Y position, draw a straight horizontal line
  if (Math.abs(sourceY - targetY) < 2) {
    edgePath = `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`
  } else {
    // Bezier curve for different Y positions
    const midX = (sourceX + targetX) / 2
    edgePath = `M ${sourceX} ${sourceY} C ${midX} ${sourceY}, ${midX} ${targetY}, ${targetX} ${targetY}`
  }

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      style={{ fill: 'none', ...style }}
      markerEnd={markerEnd}
    />
  )
})

BranchEdge.displayName = 'BranchEdge'

export const nodeTypes = {
  commit: CommitNode,
  branchLabel: BranchLabelNode,
  tag: TagNode,
  environment: EnvironmentNode
}

export const edgeTypes = {
  branch: BranchEdge
}

export { BRANCH_COLORS }

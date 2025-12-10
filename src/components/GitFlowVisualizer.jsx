import { useEffect } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
// import './FlowNodes.css' - Moved to index.css
// import './GitFlowVisualizer.css' - Moved to index.css 
import { nodeTypes, edgeTypes, BRANCH_COLORS } from './FlowNodes'

// ============================================
// LAYOUT CONFIGURATION
// ============================================
const LAYOUT = {
  VERTICAL_SPACING: 50,    // Space between branches (Y axis)
  HORIZONTAL_SPACING: 60,  // Space between commits (X axis)
  FIRST_COMMIT_X: 150,     // X position of first commit column
  INITIAL_CURRENT_X: 140,  // Starting X position tracker
  DELETED_LABEL_OPACITY: 0.3,
  DELETED_NODE_OPACITY: 0.1,
  VIEWPORT_PADDING_X: 50,
  VIEWPORT_PADDING_Y: 70, 
  DEFAULT_ZOOM: 1.5,
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
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  
  // Generate nodes and edges based on current step
  useEffect(() => {
    const stepsToProcess = useCase.steps.slice(0, currentStep + 1)
    
    const newNodes = []
    const newEdges = []
    const branchYPositions = { main: 0, develop: LAYOUT.VERTICAL_SPACING }
    let nextY = LAYOUT.VERTICAL_SPACING * 2
    let currentX = LAYOUT.INITIAL_CURRENT_X
    const nodeSpacing = LAYOUT.HORIZONTAL_SPACING
    const firstCommitX = LAYOUT.FIRST_COMMIT_X
    
    // Track commits per branch for connections
    const branchCommits = {
      main: [],
      develop: []
    }
    
    // Track the rightmost X position for each branch
    const branchEndX = { main: firstCommitX, develop: firstCommitX + nodeSpacing }
    
    const mainType = getBranchType('main')
    const devType = getBranchType('develop')
    
    // Branch labels
    newNodes.push({
      id: 'label-main',
      type: 'branchLabel',
      position: { x: 0, y: branchYPositions.main - 8 },
      data: { label: 'main', branchType: mainType }
    })
    
    newNodes.push({
      id: 'label-develop',
      type: 'branchLabel',
      position: { x: 0, y: branchYPositions.develop - 8 },
      data: { label: 'develop', branchType: devType }
    })
    
    // Initial commits
    newNodes.push({
      id: 'init-main',
      type: 'commit',
      position: { x: firstCommitX, y: branchYPositions.main },
      data: { branchType: mainType }
    })
    branchCommits.main.push({ id: 'init-main', x: firstCommitX })
    branchEndX.main = firstCommitX
    
    newNodes.push({
      id: 'init-develop',
      type: 'commit',
      position: { x: firstCommitX + nodeSpacing, y: branchYPositions.develop },
      data: { branchType: devType }
    })
    branchCommits.develop.push({ id: 'init-develop', x: firstCommitX + nodeSpacing })
    branchEndX.develop = firstCommitX + nodeSpacing
    
    // Edge from main to develop
    newEdges.push({
      id: 'edge-init',
      source: 'init-main',
      target: 'init-develop',
      type: 'branch',
      style: { stroke: BRANCH_COLORS.develop, strokeWidth: 2 }
    })
    
    // Set initial currentX
    currentX = firstCommitX + nodeSpacing * 2
    
    // Process steps
    stepsToProcess.forEach((step, stepIndex) => {
      const isCurrentStep = stepIndex === currentStep
      
      switch (step.action) {
        case 'create-branch': {
          const branchType = getBranchType(step.to)
          const color = BRANCH_COLORS[branchType] || '#6c6f85'
          
          branchYPositions[step.to] = nextY
          branchCommits[step.to] = []
          
          // Add branch label
          newNodes.push({
            id: `label-${step.to}`,
            type: 'branchLabel',
            position: { x: 0, y: nextY - 8 },
            data: { label: step.to, branchType }
          })
          
          // Add first commit on new branch
          const commitId = `${step.to}-start`
          const parentCommits = branchCommits[step.from] || []
          const parentCommit = parentCommits[parentCommits.length - 1]
          const branchStartX = Math.max(firstCommitX, parentCommit ? parentCommit.x + nodeSpacing : currentX)
          
          newNodes.push({
            id: commitId,
            type: 'commit',
            position: { x: branchStartX, y: nextY },
            data: { branchType, isActive: isCurrentStep }
          })
          branchCommits[step.to].push({ id: commitId, x: branchStartX })
          branchEndX[step.to] = branchStartX
          
          if (parentCommit) {
            newEdges.push({
              id: `edge-create-${step.to}`,
              source: parentCommit.id,
              target: commitId,
              type: 'branch',
              style: { stroke: color, strokeWidth: 2 },
              animated: isCurrentStep
            })
          }
          
          nextY += LAYOUT.VERTICAL_SPACING
          currentX = Math.max(currentX, branchStartX + nodeSpacing)
          break
        }
        
        case 'commit': {
          const branchType = getBranchType(step.branch)
          const color = BRANCH_COLORS[branchType] || '#6c6f85'
          const y = branchYPositions[step.branch] ?? 0
          
          const commitId = `commit-${stepIndex}`
          const prevCommits = branchCommits[step.branch] || []
          const prevCommit = prevCommits[prevCommits.length - 1]
          
          const commitX = prevCommit ? prevCommit.x + nodeSpacing : currentX
          
          newNodes.push({
            id: commitId,
            type: 'commit',
            position: { x: commitX, y },
            data: { branchType, isActive: isCurrentStep }
          })
          
          if (!branchCommits[step.branch]) branchCommits[step.branch] = []
          branchCommits[step.branch].push({ id: commitId, x: commitX })
          branchEndX[step.branch] = commitX
          
          if (prevCommit) {
            newEdges.push({
              id: `edge-${commitId}`,
              source: prevCommit.id,
              target: commitId,
              type: 'branch',
              style: { stroke: color, strokeWidth: 3 },
              animated: isCurrentStep
            })
          }
          
          currentX = Math.max(currentX, commitX + nodeSpacing)
          break
        }
        
        case 'merge': {
          const fromType = getBranchType(step.from)
          const toType = getBranchType(step.to)
          const toColor = BRANCH_COLORS[toType] || '#6c6f85'
          const fromColor = BRANCH_COLORS[fromType] || '#6c6f85'
          const y = branchYPositions[step.to] ?? 0
          
          const mergeId = `merge-${stepIndex}`
          const fromCommits = branchCommits[step.from] || []
          const toCommits = branchCommits[step.to] || []
          const fromCommit = fromCommits[fromCommits.length - 1]
          const toCommit = toCommits[toCommits.length - 1]
          
          newNodes.push({
            id: mergeId,
            type: 'commit',
            position: { x: currentX, y },
            data: { branchType: toType, isMerge: true, isActive: isCurrentStep }
          })
          
          if (!branchCommits[step.to]) branchCommits[step.to] = []
          branchCommits[step.to].push({ id: mergeId, x: currentX })
          branchEndX[step.to] = currentX
          
          if (fromCommit) {
            newEdges.push({
              id: `edge-merge-from-${stepIndex}`,
              source: fromCommit.id,
              target: mergeId,
              type: 'branch',
              style: { stroke: fromColor, strokeWidth: 2 },
              animated: isCurrentStep
            })
          }
          
          if (toCommit) {
            newEdges.push({
              id: `edge-merge-to-${stepIndex}`,
              source: toCommit.id,
              target: mergeId,
              type: 'branch',
              style: { stroke: toColor, strokeWidth: 3 },
              animated: isCurrentStep
            })
          }
          
          currentX += nodeSpacing
          break
        }
        
        case 'tag': {
          const branchCommitsArr = branchCommits[step.branch] || []
          const lastCommit = branchCommitsArr[branchCommitsArr.length - 1]
          
          if (lastCommit) {
            newNodes.push({
              id: `tag-${step.tag}`,
              type: 'tag',
              position: { x: lastCommit.x - 15, y: branchYPositions[step.branch] - 35 },
              data: { label: step.tag }
            })
          }
          break
        }
        
        case 'deploy': {
          const branchCommitsArr = branchCommits[step.branch] || []
          const lastCommit = branchCommitsArr[branchCommitsArr.length - 1]
          const envLabel = step.environment === 'production' ? 'PRODUCTION' : 'STAGING'
          
          // Create environment line if it doesn't exist - position at TOP (negative Y)
          if (branchYPositions[step.environment] === undefined) {
            // Staging at -50, Production at -100 (above main which is at 0)
            const envY = step.environment === 'production' ? -LAYOUT.VERTICAL_SPACING * 2 : -LAYOUT.VERTICAL_SPACING
            branchYPositions[step.environment] = envY
            branchCommits[step.environment] = []
            
            // Add environment label
            newNodes.push({
              id: `label-${step.environment}`,
              type: 'branchLabel',
              position: { x: 0, y: envY - 8 },
              data: { 
                label: envLabel, 
                branchType: step.environment // Use environment as branchType for color
              }
            })
          }
          
          if (lastCommit) {
            // Add deploy node on environment line
            const envId = `deploy-${step.environment}-${stepIndex}`
            const envY = branchYPositions[step.environment]
            const envX = lastCommit.x
            
            newNodes.push({
              id: envId,
              type: 'commit',
              position: { x: envX, y: envY },
              data: { 
                branchType: step.environment, // Use environment as branchType
                isActive: isCurrentStep,
                isDeploy: true
              }
            })
            
            // Track this commit (no connection lines per user request)
            if (!branchCommits[step.environment]) branchCommits[step.environment] = []
            branchCommits[step.environment].push({ id: envId, x: envX })
          }
          break
        }
        
        case 'delete-branch': {
          const labelNode = newNodes.find(n => n.id === `label-${step.branch}`)
          if (labelNode) {
            labelNode.data = { ...labelNode.data, deleted: true }
            labelNode.style = { opacity: LAYOUT.DELETED_LABEL_OPACITY }
          }
          
          const branchNodeIds = (branchCommits[step.branch] || []).map(c => c.id)
          newNodes.forEach(node => {
            if (branchNodeIds.includes(node.id)) {
              node.data = { ...node.data, deleted: true }
              node.style = { ...node.style, opacity: LAYOUT.DELETED_NODE_OPACITY }
            }
          })
          
          newEdges.forEach(edge => {
            if (branchNodeIds.includes(edge.source) || branchNodeIds.includes(edge.target)) {
              edge.style = { ...edge.style, opacity: LAYOUT.DELETED_NODE_OPACITY }
            }
          })
          break
        }
      }
    })
    
    setNodes(newNodes)
    setEdges(newEdges)
  }, [currentStep, useCase.steps, setNodes, setEdges])
  
  // Auto-play
  useEffect(() => {
    if (!isPlaying) return
    
    const timer = setTimeout(() => {
      onStepComplete()
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [isPlaying, currentStep, onStepComplete])
  
  // Calculate viewport offset based on environments
  const hasEnvironments = useCase.steps.some(step => step.action === 'deploy')
  const viewportY = hasEnvironments 
    ? LAYOUT.VIEWPORT_PADDING_Y + LAYOUT.VERTICAL_SPACING * 2  // Shift down to show environments at top
    : LAYOUT.VIEWPORT_PADDING_Y
  
  return (
    <div className="flex-1 flex flex-col overflow-hidden h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultViewport={{ x: LAYOUT.VIEWPORT_PADDING_X, y: viewportY, zoom: LAYOUT.DEFAULT_ZOOM }}
        minZoom={0.4}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        defaultEdgeOptions={{ type: 'branch' }}
      >
        <Background color="#ccd0da" gap={20} size={1} />
        <Controls showInteractive={false} position="bottom-right" className="!m-4 !shadow-sm !border-border-color" />
      </ReactFlow>
    </div>
  )
}

export default GitFlowVisualizer

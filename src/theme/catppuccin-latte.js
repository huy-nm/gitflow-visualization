/* Catppuccin Latte Color Palette
 * https://github.com/catppuccin/catppuccin
 * 
 * A soothing pastel light theme for the high-spirited!
 */

/* Base colors */
export const latte = {
  // Base backgrounds (light to dark)
  base: '#eff1f5',      // Main background
  mantle: '#e6e9ef',    // Secondary background
  crust: '#dce0e8',     // Darkest background
  
  // Surface colors (for cards, elevated elements)
  surface0: '#ccd0da',
  surface1: '#bcc0cc',
  surface2: '#acb0be',
  
  // Overlay colors (for dropdowns, modals)
  overlay0: '#9ca0b0',
  overlay1: '#8c8fa1',
  overlay2: '#7c7f93',
  
  // Text colors
  text: '#4c4f69',       // Primary text
  subtext0: '#6c6f85',   // Secondary text
  subtext1: '#5c5f77',   // Muted text
  
  // Accent colors
  rosewater: '#dc8a78',
  flamingo: '#dd7878',
  pink: '#ea76cb',
  mauve: '#8839ef',      // Purple
  red: '#d20f39',
  maroon: '#e64553',
  peach: '#fe640b',      // Orange
  yellow: '#df8e1d',
  green: '#40a02b',
  teal: '#179299',
  sky: '#04a5e5',
  sapphire: '#209fb5',
  blue: '#1e66f5',
  lavender: '#7287fd'
}

// Branch colors mapping for GitFlow
export const branchColors = {
  main: latte.green,
  develop: latte.blue,
  feature: latte.mauve,
  release: latte.peach,
  hotfix: latte.red,
  bugfix: latte.pink
}

export default latte

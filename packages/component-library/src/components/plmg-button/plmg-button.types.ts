const designs = [
  'filled',
  'filled-round',
  'outline',
  'outline-round',
  'borderless',
] as const;
export type PlmgButtonDesign = typeof designs[number];
export function isPlmgButtonDesign(x: any): x is PlmgButtonDesign {
  return designs.includes(x);
}

const sizes = ['small', 'medium', 'large', 'extra-large'] as const;
export type PlmgButtonSize = typeof sizes[number];
export function isPlmgButtonSize(x: any): x is PlmgButtonSize {
  return sizes.includes(x);
}

const colors = ['primary', 'neutral', 'standout', 'danger'] as const;
export type PlmgButtonColor = typeof colors[number];
export function isPlmgButtonColor(x: any): x is PlmgButtonColor {
  return colors.includes(x);
}
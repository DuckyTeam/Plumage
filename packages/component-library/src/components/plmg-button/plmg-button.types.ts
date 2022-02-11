const variants = [
  'filled',
  'filled-round',
  'outline',
  'outline-round',
  'borderless',
] as const;
export type PlmgButtonVariant = typeof variants[number];
export function isPlmgButtonVariant(x: any): x is PlmgButtonVariant {
  return variants.includes(x);
}

const sizes = ['small', 'medium', 'large', 'extra-large'];
export type PlmgButtonSize = typeof sizes[number];
export function isPlmgButtonSize(x: any): x is PlmgButtonSize {
  return sizes.includes(x);
}

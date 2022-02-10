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

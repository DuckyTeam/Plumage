export const variants = [
  'neutral',
  'danger',
  'info',
  'warning',
  'success',
] as const;
export type PlmgStatusVariant = typeof variants[number];
export function isPlmgStatusVariant(x: any): x is PlmgStatusVariant {
  return variants.includes(x);
}

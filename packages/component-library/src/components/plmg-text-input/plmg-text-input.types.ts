export const sizes = ['medium', 'large'] as const;
export type PlmgTextInputSize = typeof sizes[number];
export function isPlmgTextInputSize(x: any): x is PlmgTextInputSize {
  return sizes.includes(x);
}

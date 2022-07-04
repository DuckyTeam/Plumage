export const sizes = ['medium', 'large'] as const;
export type PlmgErrorMessageSize = typeof sizes[number];
export function isPlmgErrorMessageSize(x: any): x is PlmgErrorMessageSize {
  return sizes.includes(x);
}

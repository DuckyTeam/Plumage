export const sizes = ['medium', 'large'] as const;
export type PlmgRadioButtonSize = typeof sizes[number];
export function isPlmgRadioButtonSize(x: any): x is PlmgRadioButtonSize {
  return sizes.includes(x);
}

export const sizes = ['medium', 'large'] as const;
export type PlmgTextInputSize = typeof sizes[number];
export function isPlmgTextInputSize(x: any): x is PlmgTextInputSize {
  return sizes.includes(x);
}

export const types = [
  'text',
  'email',
  'password',
  'tel',
  'url',
  'search',
  'number',
] as const;
export type PlmgTextInputType = typeof types[number];
export function isPlmgTextInputType(x: any): x is PlmgTextInputType {
  return types.includes(x);
}

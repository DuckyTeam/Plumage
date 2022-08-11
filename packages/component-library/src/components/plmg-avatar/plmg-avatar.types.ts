export const sizes = ['small', 'medium', 'large', 'extra-large'] as const;
export type PlmgAvatarSize = typeof sizes[number];
export function isPlmgAvatarSize(x: any): x is PlmgAvatarSize {
  return sizes.includes(x);
}

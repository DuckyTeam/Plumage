export const levels = [1, 2] as const;
export type PlmgSideBarItemLevel = typeof levels[number];
export function isPlmgSideBarItemLevel(x: any): x is PlmgSideBarItemLevel {
  return levels.includes(x);
}

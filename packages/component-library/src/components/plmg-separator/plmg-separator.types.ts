export const directions = ['horizontal', 'vertical'] as const;
export type PlmgSeparatorDirection = typeof directions[number];
export function isPlmgSeparatorDirection(x: any): x is PlmgSeparatorDirection {
  return directions.includes(x);
}

export const widths = ['thin', 'thick'] as const;
export type PlmgSeparatorWidth = typeof widths[number];
export function isPlmgSeparatorWidth(x: any): x is PlmgSeparatorWidth {
  return widths.includes(x);
}

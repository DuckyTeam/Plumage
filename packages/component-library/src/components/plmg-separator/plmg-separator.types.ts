export const directions = ['horizontal', 'vertical'] as const;
export type PlmgSeparatorDirection = typeof directions[number];
export function isPlmgSeparatorDirection(x: any): x is PlmgSeparatorDirection {
  return directions.includes(x);
}

export const thicknesses = ['thin', 'thick'] as const;
export type PlmgSeparatorThickness = typeof thicknesses[number];
export function isPlmgSeparatorThickness(x: any): x is PlmgSeparatorThickness {
  return thicknesses.includes(x);
}

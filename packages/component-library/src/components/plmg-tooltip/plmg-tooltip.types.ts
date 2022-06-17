export const colors = ['neutral', 'primary'] as const;
export type PlmgTooltipColor = typeof colors[number];
export function isTooltipColor(x: any): x is typeof colors {
  return colors.includes(x);
}

export const positions = ['left', 'right', 'top', 'bottom'] as const;
export type PlmgTooltipPosition = typeof positions[number];
export function isPosition(x: any): x is typeof positions {
  return positions.includes(x);
}

export const arrowPositions = ['none', 'start', 'middle', 'end'] as const;
export type PlmgTooltipArrowPosition = typeof arrowPositions[number];
export function isArrowPosition(x: any): x is typeof arrowPositions {
  return arrowPositions.includes(x);
}

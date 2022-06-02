export const backgroundColors = ['neutral', 'primary'] as const;
export type PlmgTooltipBackgroundColors = typeof backgroundColors[number];
export function isBackgroundColor(x: any): x is typeof backgroundColors {
  return backgroundColors.includes(x);
}

export const positions = ['left', 'right', 'top', 'bottom'] as const;
export type PlmgTooltipPosition = typeof positions[number];
export function isPosition(x: any): x is typeof positions {
  return positions.includes(x);
}

export const arrowPositions = ['none', 'start', 'middle', 'end'] as const;
export type PlmgTooltipArrowPositions = typeof arrowPositions[number];
export function isArrowPosition(x: any): x is typeof arrowPositions {
  return arrowPositions.includes(x);
}

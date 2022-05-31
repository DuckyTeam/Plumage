export const backgroundColors = ['neutral', 'primary'] as const;
export type PlmgTooltipBackgroundColors = typeof backgroundColors[number];
export function isBackgroundColor(x: any): x is typeof backgroundColors {
  return backgroundColors.includes(x);
}

export const arrowSides = ['none', 'left', 'right', 'top', 'bottom'] as const;
export type PlmgTooltipArrowSides = typeof arrowSides[number];
export function isArrowSide(x: any): x is typeof arrowSides {
  return arrowSides.includes(x);
}

export const arrowPositions = ['start', 'middle', 'end'] as const;
export type PlmgTooltipArrowPositions = typeof arrowPositions[number];
export function isArrowPosition(x: any): x is typeof arrowPositions {
  return arrowPositions.includes(x);
}

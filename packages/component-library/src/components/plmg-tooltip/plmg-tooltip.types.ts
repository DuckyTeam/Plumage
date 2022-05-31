export const backgroundColors = ['neutral', 'primary'] as const;
export type backgroundColors = typeof backgroundColors[number];
export function isBackgroundColor(x: any): x is backgroundColors {
  return backgroundColors.includes(x);
}

export const arrowSides = ['none', 'left', 'right', 'top', 'bottom'] as const;
export type arrowSides = typeof arrowSides[number];
export function isArrowSide(x: any): x is arrowSides {
  return arrowSides.includes(x);
}

export const arrowPositions = ['start', 'middle', 'end'] as const;
export type arrowPositions = typeof arrowPositions[number];
export function isArrowPosition(x: any): x is arrowPositions {
  return arrowPositions.includes(x);
}

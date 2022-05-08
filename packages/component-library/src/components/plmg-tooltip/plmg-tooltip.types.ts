export const PlmgTooltipBgColor = ['neutral', 'primary'] as const;
export type PlmgTooltipBgColor = typeof PlmgTooltipBgColor[number];
export function isPlmgTooltipBgColor(x: any): x is PlmgTooltipBgColor {
  return PlmgTooltipBgColor.includes(x);
}

export const PlmgTooltipArrowSide = [
  'none',
  'left',
  'right',
  'top',
  'bottom',
] as const;
export type PlmgTooltipArrowSide = typeof PlmgTooltipArrowSide[number];
export function isPlmgTooltipArrowSide(x: any): x is PlmgTooltipArrowSide {
  return PlmgTooltipArrowSide.includes(x);
}

export const PlmgTooltipArrowPosition = ['start', 'middle', 'end'] as const;
export type PlmgTooltipArrowPosition = typeof PlmgTooltipArrowPosition[number];
export function isPlmgTooltipArrowPosition(
  x: any
): x is PlmgTooltipArrowPosition {
  return PlmgTooltipArrowPosition.includes(x);
}

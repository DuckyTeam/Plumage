export const alignments = ['left', 'right'] as const;
export type PlmgDropdownAlignments = typeof alignments[number];
export function isPlmgDropdownAligment(x: any): x is PlmgDropdownAlignments {
  return alignments.includes(x);
}

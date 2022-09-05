export const RANGE_INPUT_PARAMETERS = {
  decimal: {
    label: 'decimal',
    default: 0.5,
    range: '0, 1',
    step: 0.1,
    marks: true,
  },
  stepped: {
    label: 'stepped',
    default: 10,
    range: '0, 500',
    step: 5,
    marks: true,
  },
  large: {
    label: 'large',
    default: 0,
    range: '-500, 0, 500',
    step: 100,
    marks: true,
  },
};

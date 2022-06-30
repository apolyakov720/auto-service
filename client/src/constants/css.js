const SIZES = {
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
  XXL: 'XXL',
};

export default {
  SIZES,
  DELIMITERS: {
    MODIFIER: '--',
  },
  SIZE_CLASSES: {
    [SIZES.XS]: 'size-xs',
    [SIZES.S]: 'size-s',
    [SIZES.M]: 'size-m',
    [SIZES.L]: 'size-l',
    [SIZES.XL]: 'size-xl',
    [SIZES.XXL]: 'size-xxl',
  },
  THEMES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error',
    DISABLED: 'disabled',
  },
};

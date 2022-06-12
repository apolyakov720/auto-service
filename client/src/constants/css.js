const size = {
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
  XXL: 'XXL',
};

export default {
  size,
  delimiter: {
    MODIFIER: '--',
  },
  sizeClass: {
    [size.S]: 'size-s',
    [size.M]: 'size-m',
    [size.L]: 'size-l',
    [size.XL]: 'size-xl',
    [size.XXL]: 'size-xxl',
  },
  theme: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error',
    DISABLED: 'disabled',
  },
};

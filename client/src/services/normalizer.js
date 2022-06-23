import { NormalizerConstants } from '@constants';

class Normalizer {
  masks = {
    [NormalizerConstants.mask.PHONE]: '+7 (999) 999-99-99',
    [NormalizerConstants.mask.DATE]: '99.99.9999',
  };

  maskChar = {
    [NormalizerConstants.mask.PHONE]: '9',
  };

  formatChars = {
    '*': '[0-9A-Za-zА-ЯЁа-яё]',
    '9': '[0-9]',
  };
}

export default new Normalizer();

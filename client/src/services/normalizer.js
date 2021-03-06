import { NormalizerConstants } from '@constants';

class Normalizer {
  masks = {
    [NormalizerConstants.MASKS.PHONE]: '+7 (999) 999-99-99',
    [NormalizerConstants.MASKS.DATE]: '99.99.9999',
  };

  maskChars = {
    [NormalizerConstants.MASKS.PHONE]: '9',
  };

  formats = {};

  formatChars = {
    '*': '[0-9A-Za-zА-ЯЁа-яё]',
    '9': '[0-9]',
  };
}

export default new Normalizer();

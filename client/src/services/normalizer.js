class Normalizer {
  maskChars = {
    '*': '[0-9A-Za-zА-ЯЁа-яё]',
    '9': '[0-9]',
    'a': '[A-Za-zА-ЯЁа-яё]',
    'l': '[A-Za-z]',
    'c': '[А-ЯЁа-яё]',
  };

  masks = {
    phone: '+ 7 (999) 999-99-99',
  };
}

export default new Normalizer();

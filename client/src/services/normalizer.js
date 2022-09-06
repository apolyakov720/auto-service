const masks = {
  phone: 'phone',
  date: 'date',
};

class Normalizer {
  masks = {
    [masks.phone]: '+7 (999) 999-99-99',
    [masks.date]: '99.99.9999',
  };

  maskChars = {
    [masks.phone]: '9',
  };

  formatChars = {
    '*': '[0-9A-Za-zА-ЯЁа-яё]',
    '9': '[0-9]',
  };
}

export { masks };
export default new Normalizer();

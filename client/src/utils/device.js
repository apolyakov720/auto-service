const getSize = () => {
  const w = window;
  const e = window.document.documentElement;
  const b = window.document.getElementsByTagName('body')[0];

  const width = w.innerWidth || e.clientWidth || b.clientWidth;
  const height = w.innerHeight || e.clientHeight || b.clientHeight;

  return {
    width,
    height,
  };
};

const isMobile = () => getSize().width <= 1000;

export default {
  isMobile,
};

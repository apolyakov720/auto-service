import { useState } from 'react';

const usePosition = () => {
  const [css, setCSS] = useState({});

  const getPosition = (targetElement) => {
    // const targetRect = targetElement.getBoundingClientRect();

    // console.log('targetRect: ', targetElement);
    console.dir(targetElement);
  };

  return [
    { ...css, position: 'fixed' },
    (targetElement) => {
      setCSS({ ...getPosition(targetElement) });
    },
  ];
};

export default {
  usePosition,
};

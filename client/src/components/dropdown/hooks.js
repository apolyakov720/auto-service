import { useState } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({});

  const getPosition = (element) => {
    if (element.current) {
      const elementRect = element.current.getBoundingClientRect();
      const x = window.pageXOffset + elementRect.left;
      const y = window.pageYOffset + elementRect.top + elementRect.height;

      return {
        left: x,
        top: y,
      };
    }
  };

  return [
    { ...position, position: 'fixed' },
    (element) => {
      setPosition({ ...getPosition(element) });
    },
  ];
};

export default {
  usePosition,
};

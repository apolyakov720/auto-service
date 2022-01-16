import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import hooks from './hooks';
import ScrollBox from '@components/scroll-box';

const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = hooks.usePosition();

  const handleSwitchOpen = (event) => {
    event.preventDefault();

    if (open) {
      setOpen(false);
    } else {
      setPosition(event.target);
      setOpen(true);
    }

    event.stopPropagation();
  };

  return (
    <>
      {children(handleSwitchOpen)}
      {open &&
        createPortal(
          <div className="dropdown" style={{ ...position }}>
            <ScrollBox>
              <div>Dropdown</div>
            </ScrollBox>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Dropdown;

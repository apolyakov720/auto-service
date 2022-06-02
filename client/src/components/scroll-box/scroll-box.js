import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

import { CommonUtils, CSSUtils } from '@utils';

const ScrollBox = ({ children, hideVerticalTrack = false, hideVerticalBar = false }) => {
  const [markerStats, setVerticalMarkerStats] = useState({ top: 0, height: 25 });
  let refElementContent = useRef(null);

  const handleScroll = (event) => {
    const currentElementContent = refElementContent?.current;

    if (currentElementContent) {
      const { clientHeight, scrollHeight, scrollTop } = currentElementContent;
      const markerHeight = Math.ceil((clientHeight / scrollHeight) * clientHeight);

      const markerYPosition =
        (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - markerHeight);

      setVerticalMarkerStats({ ...markerStats, top: markerYPosition });
    }

    event.stopPropagation();
  };

  const handleMouseDown = (event) => {
    event.preventDefault();

    const { clientY, target } = event;
    const { top: markerTop } = target.getBoundingClientRect();
    const startYMarkerPosition = clientY - markerTop;

    const handleMouseMove = (event) => {
      const currentElementContent = refElementContent?.current;

      if (currentElementContent) {
        const { scrollHeight, clientHeight } = currentElementContent;
        const { top: trackTop } = currentElementContent.getBoundingClientRect();
        const markerHeight = Math.ceil((clientHeight / scrollHeight) * clientHeight);

        const offsetYMarkerPosition = event.clientY - trackTop - startYMarkerPosition;

        currentElementContent.scrollTop =
          (offsetYMarkerPosition / (clientHeight - markerHeight)) * (scrollHeight - clientHeight);
      }

      event.stopPropagation();
    };

    const handleMouseUp = (event) => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      event.stopPropagation();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    event.stopPropagation();
  };

  const updateVerticalMarkerStats = () => {
    const currentElementContent = refElementContent?.current;

    if (currentElementContent) {
      const { clientHeight, scrollHeight } = currentElementContent;

      // Так как scrollHeight возвращается неправильный, высчитываем приблизительную высота маркера
      const approximatelyMarkerHeight = (clientHeight / scrollHeight) * clientHeight;
      const baseUnit = clientHeight / scrollHeight;

      setVerticalMarkerStats({ ...markerStats, baseUnit, height: approximatelyMarkerHeight });
    }
  };

  useLayoutEffect(() => {
    updateVerticalMarkerStats();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', CommonUtils.debounce(updateVerticalMarkerStats));

    return () => {
      window.removeEventListener('resize', CommonUtils.debounce(updateVerticalMarkerStats));
    };
  }, []);

  return (
    <div className="scroll-box">
      <div
        className="scroll-box__content"
        ref={refElementContent}
        onScroll={CommonUtils.debounce(handleScroll, { immediate: true })}>
        {children}
      </div>
      {!hideVerticalBar && markerStats.baseUnit < 1 && (
        <div
          className={CSSUtils.mergeModifiers('scroll-box__vertical-bar', {
            hide: hideVerticalTrack,
          })}>
          <div
            className="marker"
            onMouseDown={handleMouseDown}
            style={{ height: markerStats.height, top: markerStats.top }}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollBox;

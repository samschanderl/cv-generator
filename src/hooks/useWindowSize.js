import { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
    const [width, setWidth] = useState();
    useLayoutEffect(() => {
      const updateWidth = () => {
        setWidth(window.innerWidth)
      }
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => window.removeEventListener('resize', updateWidth)
    }, []);
    return width;
  }

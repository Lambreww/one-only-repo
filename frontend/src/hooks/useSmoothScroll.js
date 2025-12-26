import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }, []);

  return scrollToElement;
};
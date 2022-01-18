import { useEffect } from 'react';

// Hook
export const useOuterClickNotifier = (onOuterClick, innerRef) => {
  const handleClick = (e) => {
    innerRef.current && !innerRef.current.contains(e.target) && onOuterClick(e);
  };

  useEffect(() => {
    // only add listener, if the element exists
    if (innerRef.current) {
      document.addEventListener('click', handleClick);
    }

    // unmount previous first in case input have changed
    return () => document.removeEventListener('click', handleClick);
  }, [onOuterClick, innerRef]); // invoke again, if inputs have changed
};

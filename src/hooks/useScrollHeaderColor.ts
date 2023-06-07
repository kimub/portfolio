import { useLayoutEffect, useState } from 'react';

export function useScrollHeaderColor() {
  const [isScroll, setIsScroll] = useState(false);

  useLayoutEffect(() => {
    const handleHeaderTextColor = () => {
      if (window.scrollY > window.innerHeight - 30) {
        setIsScroll(true);
        return;
      }

      setIsScroll(false);
    };

    window.addEventListener('scroll', handleHeaderTextColor);

    return () => {
      window.removeEventListener('scroll', handleHeaderTextColor);
    };
  }, []);

  return isScroll;
}

import { useLayoutEffect } from 'react';

export function useScrollHeaderColor() {
  useLayoutEffect(() => {
    window.addEventListener('scroll', (e) => {
      console.log(e);
    });
  }, []);
}

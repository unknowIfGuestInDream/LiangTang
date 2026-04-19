'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const _pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;

import React, { lazy, Suspense } from 'react';

const LazyHeader = lazy(() => import('./Header'));

const Header = (props: {
    setIsAuthenticated: (text: boolean) => void
    isAuthenticated: boolean
} & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeader {...props} />
  </Suspense>
);

export default Header;

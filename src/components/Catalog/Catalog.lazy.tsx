import React, { lazy, Suspense } from 'react';

const LazyCatalog = lazy(() => import('./Catalog'));

const Catalog = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCatalog {...props} />
  </Suspense>
);

export default Catalog;

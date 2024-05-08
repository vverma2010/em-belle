import React, { lazy, Suspense } from "react";

export const CustomIcon = ({ name }) => {
  const LazyIcon = lazy(() => import(`./assets/${name}.svg`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyIcon />
    </Suspense>
  );
};

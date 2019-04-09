import * as React from "react";
const Lazy = React.lazy(() => import("./Lazy"));
const Suspense = React.Suspense;

const Never = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading.....hurrah</div>}>
        <Lazy />
      </Suspense>
    </div>
  );
};

export default Never;

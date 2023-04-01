import React, { useState } from "react";

export function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  function handleCatch() {
    setHasError(true);
  }

  if (hasError) {
    return (
      <h2 data-testid="error-boundary" className="text-2xl text-abnamro-green">
        Something went wrong.
      </h2>
    );
  }

  return (
    <React.Fragment>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {
          onError: handleCatch,
        })
      )}
    </React.Fragment>
  );
}

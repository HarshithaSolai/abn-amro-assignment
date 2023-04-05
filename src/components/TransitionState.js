import React from "react";

export const TransitionState = ({ type }) => {
  const message = () => {
    switch (type) {
      case "error-state":
        return "Something went wrong...";
      case "loading-state":
        return "Loading...";
      case "no-data":
        return "No data found...";
      default:
        return "Unforseen error...";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 data-testid={type || "default"} className="text-2xl">
        {message()}
      </h2>
    </div>
  );
};

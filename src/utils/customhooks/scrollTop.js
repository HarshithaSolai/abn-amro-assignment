import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

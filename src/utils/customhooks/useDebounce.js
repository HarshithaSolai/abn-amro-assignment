import { useRef, useCallback } from "react";
import { DEBOUNCE_DELAY } from "../config";

export const useDebounce = (callback) => {
  const debounceTimer = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        callback(...args);
      }, DEBOUNCE_DELAY);
    },
    [callback]
  );

  return debouncedCallback;
};

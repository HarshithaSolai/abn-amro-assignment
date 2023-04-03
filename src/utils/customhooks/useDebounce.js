

import { DEBOUNCE_DELAY } from "../../utils/config";

export const useDebounce = (callback, delay) => {
  let timerId;
  
  return (...args) => {
    clearTimeout(timerId);
    
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};




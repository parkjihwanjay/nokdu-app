import { useState } from "react";

export const useDebounce = (cb, timeout) => {
  const [timeoutId, setTimeoutId] = useState(null);
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      cb(...args);
    }, timeout);
    setTimeoutId(newTimeoutId);
  };
};

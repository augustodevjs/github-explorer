import { useState, useEffect } from "react";
import { Response } from "../types";

function usePersistedTheme<T>(key: string, initialState: any): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    
    if(storageValue) {
      return JSON.parse(storageValue);
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state])

  return [state, setState];
}

export default usePersistedTheme;
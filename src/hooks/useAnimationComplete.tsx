
import { useState, useEffect } from 'react';

/**
 * Hook to manage animation completion state
 * @param delay Delay in milliseconds before setting animation as complete
 * @returns Animation completion state
 */
export const useAnimationComplete = (delay: number = 1000) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return animationComplete;
};

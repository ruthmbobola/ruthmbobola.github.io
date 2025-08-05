import { useState, useEffect } from "react";

export default function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === 0) {
      setCount(0);
      return;
    }

    const start = Date.now();
    const startCount = count;
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (target - startCount) + startCount);
      
      setCount(current);
      
      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

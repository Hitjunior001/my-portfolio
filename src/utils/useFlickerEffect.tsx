import { useMemo } from 'react';

export function useFlickerEffect(minDelay = 0, maxDelay = 3500) {
  return useMemo(() => {
    const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    return {
      className: 'animated-flicker',
      style: {
        animationDelay: `${randomDelay}ms`,
      },
    };
  }, [useFlickerEffect]);
}

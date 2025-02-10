import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const direction = currentOffset > prevOffset ? 'down' : 'up';

      if (direction !== scrollDirection && 
          (Math.abs(currentOffset - prevOffset) > 10)) {
        setScrollDirection(direction);
      }
      setPrevOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, prevOffset]);

  return scrollDirection;
};

export default useScrollDirection;
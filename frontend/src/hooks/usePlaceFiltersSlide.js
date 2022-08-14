import { useEffect, useRef, useState } from 'react';

const scrollToLeft = { top: 0, left: 200, behavior: 'smooth' };
const scrollToRight = { top: 0, left: -200, behavior: 'smooth' };

const usePlaceFiltersSlide = () => {
  const placeFiltersButtons = useRef(null);
  const [actualScroll, setActualScroll] = useState(0);
  const [actualizeScroll, setActualizeScroll] = useState(false);

  useEffect(() => {
    if (!actualizeScroll) {
      return;
    }
    const timeOutId = setTimeout(() => {
      setActualScroll(placeFiltersButtons.current.scrollLeft);
      setActualizeScroll(false);
    }, 200);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [actualizeScroll]);

  const handleLeftScroll = () => {
    placeFiltersButtons.current.scrollBy(scrollToLeft);
    setActualizeScroll(true);
  };

  const handleRightScroll = () => {
    placeFiltersButtons.current.scrollBy(scrollToRight);
    setActualizeScroll(true);
  };

  const isInitial = actualScroll === 0;
  let isFinal = false;

  if (placeFiltersButtons.current) {
    isFinal =
      actualScroll + placeFiltersButtons.current.clientWidth ===
      placeFiltersButtons.current.scrollWidth;
  }

  return {
    placeFiltersButtons,
    isInitial,
    isFinal,
    handleLeftScroll,
    handleRightScroll,
  };
};

export default usePlaceFiltersSlide;

import { useRef, useState } from 'react';

const useImageSlide = (images) => {
  const [actualImage, setActualImage] = useState(0);
  const [touchXStart, setTouchXStart] = useState(0);
  const [touchXEnd, setTouchXEnd] = useState(0);
  const imagesContainer = useRef(null);

  if (imagesContainer.current) {
    imagesContainer.current.style.setProperty(
      '--index',
      `${actualImage * 100}%`
    );
  }

  const handleTouchStart = (ev) => {
    setTouchXStart(ev.touches[0].clientX);
  };

  const handleTouchEnd = (ev) => {
    setTouchXEnd(ev.changedTouches[0].clientX);
  };

  const incImage = () => {
    setActualImage(actualImage + 1);
  };

  const decImage = () => {
    setActualImage(actualImage - 1);
  };

  const isFirstImage = actualImage >= 0;
  const isLastImage = actualImage * -1 >= images.length - 1;

  if (touchXEnd) {
    if (Math.abs(touchXStart - touchXEnd) > 50) {
      if (touchXEnd < touchXStart) {
        if (!isLastImage) {
          decImage();
        }
      } else {
        if (!isFirstImage) {
          incImage();
        }
      }
      setTouchXEnd(0);
    }
  }

  return {
    actualImage,
    imagesContainer,
    isFirstImage,
    isLastImage,
    incImage,
    decImage,
    handleTouchStart,
    handleTouchEnd,
  };
};

export default useImageSlide;

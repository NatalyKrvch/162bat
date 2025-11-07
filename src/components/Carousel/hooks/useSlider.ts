import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';

import { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } from '../constants/constants';

export const useSlider = (desktopPerView: number = 1) => {
  const SLIDE_OFFSET = 100;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      '(min-width:800px)': {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      '(min-width: 1200px)': {
        slides: {
          perView: desktopPerView,
          spacing: 24,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const updateContainerWidth = () => {
      const container = instanceRef.current?.container;
      if (!container) return;

      if (window.innerWidth >= 1280) {
        container.style.removeProperty('width');
      } else {
        container.style.width = `${window.innerWidth - SLIDE_OFFSET}px`;
      }

      instanceRef.current?.update();
    };

    const handlePageReady = () => updateContainerWidth();

    if (document.readyState === 'complete') {
      handlePageReady();
    } else {
      window.addEventListener('load', handlePageReady);
    }

    window.addEventListener('resize', updateContainerWidth);

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
      window.removeEventListener('load', handlePageReady);
    };
  }, [instanceRef]);

  const handleClickPrev = () => instanceRef.current?.prev();
  const handleClickNext = () => instanceRef.current?.next();

  const maxIdx = instanceRef.current?.track?.details?.maxIdx ?? 1;
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === maxIdx;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ARROW_LEFT_KEY && !isFirstSlide) handleClickPrev();
    else if (e.key === ARROW_RIGHT_KEY && !isLastSlide) handleClickNext();
  };

  return {
    sliderRef,
    handleClickNext,
    handleClickPrev,
    handleKeyDown,
    isFirstSlide,
    isLastSlide,
  };
};

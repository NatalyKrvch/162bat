import { useKeenSlider } from 'keen-slider/react';
import { type KeyboardEvent, useState } from 'react';

import { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } from '../constants/constants';

export const useSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track?.details?.rel);
    },
    slides: {
      perView: 1,
      spacing: 24,
    },
  });

  const handleClickPrev = () => {
    instanceRef.current?.prev();
  };

  const handleClickNext = () => {
    instanceRef.current?.next();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ARROW_LEFT_KEY && !isFirstSlide) {
      handleClickPrev();
    } else if (e.key === ARROW_RIGHT_KEY && !isLastSlide) {
      handleClickNext();
    }
  };

  const maxIdx = instanceRef.current?.track?.details?.maxIdx ?? 1;

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === maxIdx;

  return {
    sliderRef,
    handleClickNext,
    handleClickPrev,
    handleKeyDown,
    isFirstSlide,
    isLastSlide,
  };
};

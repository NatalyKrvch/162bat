import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

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
    instanceRef?.current?.next();
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide =
    currentSlide === instanceRef.current?.track?.details?.maxIdx;

  return {
    sliderRef,
    handleClickNext,
    handleClickPrev,
    isFirstSlide,
    isLastSlide,
  };
};

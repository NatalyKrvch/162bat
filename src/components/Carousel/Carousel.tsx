'use client';
import 'keen-slider/keen-slider.min.css';

import { type PropsWithChildren } from 'react';

import { CAROUSEL_TEST_ID } from '@/lib/testIds';

import { ArrowBack } from '../ArrowBack';
import { ArrowForward } from '../ArrowForward';
import { Button } from '../Button';
import { useSlider } from './hooks/useSlider';

const Carousel = ({ children }: PropsWithChildren) => {
  const {
    sliderRef,
    handleClickNext,
    handleClickPrev,
    isFirstSlide,
    isLastSlide,
  } = useSlider();

  return (
    <div
      data-testid={CAROUSEL_TEST_ID}
      className="flex w-full flex-col items-center gap-3"
    >
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
      <div className="flex gap-6">
        <Button
          variant="icon"
          onClick={handleClickPrev}
          disabled={isFirstSlide}
        >
          <ArrowBack />
        </Button>
        <Button variant="icon" onClick={handleClickNext} disabled={isLastSlide}>
          <ArrowForward />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;

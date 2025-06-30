'use client';
import 'keen-slider/keen-slider.min.css';

import { Children, isValidElement, type PropsWithChildren } from 'react';

import { CAROUSEL_TEST_ID } from '@/lib/testIds';

import { Button } from '../Button';
import { Arrow } from '../icons/Arrow';
import {
  NEXT_SLIDE_ARIA_LABEL,
  PREVIOUS_SLIDE_ARIA_LABEL,
} from './constants/constants';
import { useSlider } from './hooks/useSlider';

const Carousel = ({ children }: PropsWithChildren) => {
  const {
    sliderRef,
    handleClickNext,
    handleClickPrev,
    handleKeyDown,
    isFirstSlide,
    isLastSlide,
  } = useSlider();

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div
        ref={sliderRef}
        className="keen-slider"
        data-testid={CAROUSEL_TEST_ID}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {Children.map(children, (child, index) =>
          isValidElement(child) ? (
            <div key={index} className="keen-slider__slide">
              {child}
            </div>
          ) : null,
        )}
      </div>
      <div className="flex gap-6">
        <Button
          aria-label={PREVIOUS_SLIDE_ARIA_LABEL}
          variant="icon"
          onClick={handleClickPrev}
          disabled={isFirstSlide}
        >
          <Arrow direction="left" />
        </Button>
        <Button
          aria-label={NEXT_SLIDE_ARIA_LABEL}
          variant="icon"
          onClick={handleClickNext}
          disabled={isLastSlide}
        >
          <Arrow direction="right" />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;

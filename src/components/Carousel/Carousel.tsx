'use client';
import 'keen-slider/keen-slider.min.css';

import { Children, isValidElement, type PropsWithChildren } from 'react';

import { CAROUSEL_TEST_ID } from '@/lib/testIds';

import { Button } from '../Buttons/Button';
import { Arrow } from '../Icons/Arrow';
import {
  NEXT_SLIDE_ARIA_LABEL,
  PREVIOUS_SLIDE_ARIA_LABEL,
} from './constants/constants';
import { useSlider } from './hooks/useSlider';

type CarouselProps = PropsWithChildren<{
  perView?: number;
}>;

const Carousel = ({ children, perView = 1 }: CarouselProps) => {
  const {
    sliderRef,
    handleClickNext,
    handleClickPrev,
    handleKeyDown,
    isFirstSlide,
    isLastSlide,
  } = useSlider(perView);

  return (
    <div className="flex w-full max-w-full min-w-0 flex-col items-center gap-3 overflow-hidden">
      <div
        ref={sliderRef}
        className="keen-slider w-full max-w-full min-w-0 overflow-hidden"
        data-testid={CAROUSEL_TEST_ID}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {Children.map(children, (child, index) =>
          isValidElement(child) ? (
            <div key={index} className="keen-slider__slide max-w-full">
              <div className="box-border h-full w-full max-w-full min-w-0">
                {child}
              </div>
            </div>
          ) : null,
        )}
      </div>
      <div className="flex gap-6 pt-3 lg:pt-5">
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

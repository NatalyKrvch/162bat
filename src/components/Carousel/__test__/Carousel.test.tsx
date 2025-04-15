import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import {
  ARROW_BACK_TEST_ID,
  ARROW_FORWARD_TEST_ID,
  CAROUSEL_TEST_ID,
} from '@/lib/testIds';

import Carousel from '../Carousel';
import { useSlider } from '../hooks/useSlider';

jest.mock('keen-slider/keen-slider.min.css', () => ({}));
jest.mock('../hooks/useSlider');
const mockPrev = jest.fn();
const mockNext = jest.fn();
const mockUseSlider = ({ isFirstSlide = false, isLastSlide = false } = {}) => {
  (useSlider as jest.Mock).mockReturnValue({
    sliderRef: { current: null },
    handleClickPrev: mockPrev,
    handleClickNext: mockNext,
    isFirstSlide,
    isLastSlide,
  });
};

const renderCarousel = () => {
  return render(
    <Carousel>
      <div>Slide 1</div>
      <div>Slide 2</div>
    </Carousel>,
  );
};

describe('Carousel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSlider();
  });

  it('renders correctly and matches snapshot', () => {
    const { container, getByTestId } = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );

    expect(getByTestId(CAROUSEL_TEST_ID)).toBeInTheDocument();
    expect(getByTestId(ARROW_BACK_TEST_ID)).toBeInTheDocument();
    expect(getByTestId(ARROW_FORWARD_TEST_ID)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('calls navigation handlers when buttons are clicked', () => {
    const { container, getByTestId } = renderCarousel();

    fireEvent.click(getByTestId(ARROW_FORWARD_TEST_ID));
    fireEvent.click(getByTestId(ARROW_BACK_TEST_ID));
    expect(mockPrev).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });

  it('disables previous button when on first slide', () => {
    mockUseSlider({ isFirstSlide: true });
    const { container, getByTestId } = renderCarousel();

    const backArrow = getByTestId(ARROW_BACK_TEST_ID).closest('button');
    expect(backArrow).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  it('disables next button when on last slide', () => {
    mockUseSlider({ isLastSlide: true });
    const { container, getByTestId } = renderCarousel();

    const forwardArrow = getByTestId(ARROW_FORWARD_TEST_ID).closest('button');
    expect(forwardArrow).toBeDisabled();
    expect(container).toMatchSnapshot();
  });
});

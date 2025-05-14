import { fireEvent, render } from '@testing-library/react';

import { CAROUSEL_TEST_ID } from '@/lib/testIds';

import Carousel from '../Carousel';
import {
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  NEXT_SLIDE_ARIA_LABEL,
  PREVIOUS_SLIDE_ARIA_LABEL,
} from '../constants/constants';
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
    handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ARROW_LEFT_KEY && !isFirstSlide) mockPrev();
      if (e.key === ARROW_RIGHT_KEY && !isLastSlide) mockNext();
    },
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
    const { container, getByTestId, getByLabelText } = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );

    expect(getByTestId(CAROUSEL_TEST_ID)).toBeInTheDocument();
    expect(getByLabelText(PREVIOUS_SLIDE_ARIA_LABEL)).toBeInTheDocument();
    expect(getByLabelText(NEXT_SLIDE_ARIA_LABEL)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('calls navigation handlers when buttons are clicked', () => {
    const { container, getByLabelText } = renderCarousel();

    fireEvent.click(getByLabelText(NEXT_SLIDE_ARIA_LABEL));
    fireEvent.click(getByLabelText(PREVIOUS_SLIDE_ARIA_LABEL));
    expect(mockPrev).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });

  it('disables previous button when on first slide', () => {
    mockUseSlider({ isFirstSlide: true });
    const { container, getByLabelText } = renderCarousel();

    const backArrow = getByLabelText(PREVIOUS_SLIDE_ARIA_LABEL).closest(
      'button',
    );
    expect(backArrow).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  it('disables next button when on last slide', () => {
    mockUseSlider({ isLastSlide: true });
    const { container, getByLabelText } = renderCarousel();

    const forwardArrow = getByLabelText(NEXT_SLIDE_ARIA_LABEL).closest(
      'button',
    );
    expect(forwardArrow).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  test('responds to ArrowLeft and ArrowRight keys', () => {
    const { container, getByTestId } = renderCarousel();

    const slider = getByTestId(CAROUSEL_TEST_ID);

    slider.focus();
    fireEvent.keyDown(slider, { key: ARROW_RIGHT_KEY });
    expect(mockNext).toHaveBeenCalled();
    fireEvent.keyDown(slider, { key: ARROW_LEFT_KEY });
    expect(mockPrev).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
});

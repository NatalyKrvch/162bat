import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { BUTTON_TEST_ID } from '@/lib/testIds';

import Button from '../Button';
import { ButtonVariant } from '../types';

const variants: ButtonVariant[] = ['primary', 'secondary', 'link'];
const disabledStates = [true, false];

describe('Button Component', () => {
  variants.forEach(variant => {
    disabledStates.forEach(disabled => {
      it(`renders a ${variant} button with disabled=${disabled}`, () => {
        const { container, getByTestId } = render(
          <Button variant={variant} disabled={disabled}>
            {`${variant} Button`}
          </Button>,
        );

        const button = getByTestId(BUTTON_TEST_ID);
        expect(container).toMatchSnapshot();

        if (variant === 'primary') {
          expect(button).toHaveClass('bg-btn-bg', 'text-text-white');
        } else if (variant === 'secondary') {
          expect(button).toHaveClass('text-text-green', 'border-btn-bg');
        } else if (variant === 'link') {
          expect(button).toHaveClass('underline', 'text-text-white');
        }

        if (disabled) {
          expect(button).toBeDisabled();
        } else {
          expect(button).not.toBeDisabled();
        }

        fireEvent.mouseOver(button);
        if (variant === 'primary') {
          expect(button).toHaveClass('hover:bg-btn-bg-hover');
        } else if (variant === 'secondary') {
          expect(button).toHaveClass(
            'hover:border-btn-bg-hover',
            'hover:text-btn-bg-hover',
          );
        } else if (variant === 'link') {
          expect(button).toHaveClass('hover:text-btn-text-hover-secondary');
        }

        fireEvent.mouseDown(button);
        if (variant === 'primary') {
          expect(button).toHaveClass('active:bg-btn-bg-click');
        } else if (variant === 'secondary') {
          expect(button).toHaveClass(
            'active:border-btn-bg-click',
            'active:text-btn-bg-click',
          );
        } else if (variant === 'link') {
          expect(button).toHaveClass('active:text-btn-text-click-secondary');
        }
      });
    });
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    const { container, getByTestId } = render(
      <Button variant="primary" onClick={handleClick}>
        click me
      </Button>,
    );

    const button = getByTestId(BUTTON_TEST_ID);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});

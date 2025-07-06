import { fireEvent, render } from '@testing-library/react';

import { Arrow } from '@/components';
import { BUTTON_TEST_ID } from '@/lib/testIds';

import Button from '../Button';
import type { ButtonVariant } from '../types';

const variants: ButtonVariant[] = ['primary', 'secondary', 'link', 'icon'];
const disabledStates = [true, false];

describe('Button Component', () => {
  variants.forEach(variant => {
    disabledStates.forEach(disabled => {
      it(`renders a ${variant} button with disabled=${disabled}`, () => {
        const { container, getByTestId } = render(
          <Button variant={variant} disabled={disabled}>
            {variant === 'icon' ? (
              <Arrow direction="right" />
            ) : (
              `${variant} Button`
            )}
          </Button>,
        );

        const button = getByTestId(BUTTON_TEST_ID);
        expect(container).toMatchSnapshot();

        if (variant === 'primary') {
          expect(button).toHaveClass(
            'bg-btn-bg',
            'text-text-white',
            'hover:bg-btn-bg-hover',
          );
        } else if (variant === 'secondary') {
          expect(button).toHaveClass(
            'border-2',
            'text-text-green',
            'hover:border-btn-bg-hover',
          );
        } else if (variant === 'link') {
          expect(button).toHaveClass(
            'underline-thick',
            'text-text-white',
            'hover:text-btn-text-hover-secondary',
          );
        } else if (variant === 'icon') {
          expect(button).toHaveClass(
            'border-green',
            'text-green',
            'rounded-sm',
            'p-0',
            'hover:bg-btn-bg-hover',
            'hover:text-white',
            'active:border-btn-bg-click',
          );
        }

        if (disabled) {
          expect(button).toBeDisabled();
        } else {
          expect(button).not.toBeDisabled();
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

import { fireEvent, render } from '@testing-library/react';

import { Arrow } from '@/components';
import { BUTTON_TEST_ID } from '@/lib/testIds';

import Button from '../Button';
import { BUTTON_VARIANT_CLASSES } from '../constants/constants';
import { ButtonVariant } from '../types';

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
          expect(button).toHaveClass(BUTTON_VARIANT_CLASSES['primary']);
        } else if (variant === 'secondary') {
          expect(button).toHaveClass(BUTTON_VARIANT_CLASSES['secondary']);
        } else if (variant === 'link') {
          expect(button).toHaveClass(BUTTON_VARIANT_CLASSES['link']);
        } else if (variant === 'icon') {
          expect(button).toHaveClass(BUTTON_VARIANT_CLASSES['icon']);
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
        } else if (variant === 'icon') {
          expect(button).toHaveClass(
            'hover:border-btn-bg-hover',
            'hover:bg-btn-bg-hover',
            'hover:text-white',
          );
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
        } else if (variant === 'icon') {
          expect(button).toHaveClass(
            'active:bg-btn-bg-click',
            'active:border-btn-bg-click',
            'active:text-white',
          );
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

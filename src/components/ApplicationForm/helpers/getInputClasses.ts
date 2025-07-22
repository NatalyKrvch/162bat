import type { FieldErrors } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import type { FormData } from '../types';

export const getInputClasses = (
  fieldName: keyof FormData,
  errors: FieldErrors<FormData>,
  touchedFields: Partial<Record<keyof FormData, boolean>>,
  value: unknown,
  extraClassName?: string,
) => {
  const hasError = errors[fieldName];
  const isTouched = touchedFields[fieldName];

  const baseClasses =
    'w-full h-[60px] appearance-none rounded-default border outline-none focus:outline-none bg-(--color-form-color) p-3 placeholder-(--color-description) transition-color-base focus:border-(--color-text-white) placeholder:text-base placeholder:leading-[140%] placeholder:tracking-normal px-8';

  const errorClasses =
    hasError && isTouched ? 'border-(--color-text-error)' : '';

  const successClasses =
    !hasError && value && isTouched ? 'border-(--color-text-success)' : '';

  const defaultClasses = !hasError && !value ? 'border-(--color-grey)' : '';

  return twMerge(
    baseClasses,
    errorClasses || successClasses || defaultClasses,
    extraClassName,
  );
};

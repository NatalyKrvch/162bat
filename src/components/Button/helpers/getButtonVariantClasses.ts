import { BUTTON_VARIANT_CLASSES } from '../constants/buttonVariantClasses';
import type { ButtonVariant } from '../types';

export const getButtonVariantClasses = (variant: ButtonVariant): string => {
  return BUTTON_VARIANT_CLASSES[variant];
};

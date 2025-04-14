import { BUTTON_VARIANT_CLASSES } from '../constants/constants';
import { ButtonVariant } from '../types';

const useButtonClasses = () => {
  const getVariantClasses = (variant: ButtonVariant): string => {
    return BUTTON_VARIANT_CLASSES[variant];
  };

  return getVariantClasses;
};

export default useButtonClasses;

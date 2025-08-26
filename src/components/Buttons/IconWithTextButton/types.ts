import type { JSX } from 'react';

export interface IconWithTextButtonProps {
  icon: JSX.Element;
  text: string;
  buttonClassName?: string;
  textClassName?: string;
  onClick?: () => void;
}

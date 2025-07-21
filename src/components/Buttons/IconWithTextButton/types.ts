import { JSX } from 'react';

export interface IconWithTextButtonProps {
  icon: JSX.Element;
  text: string;
  className?: string;
  onClick?: () => void;
}

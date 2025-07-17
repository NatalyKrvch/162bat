import { JSX } from 'react';

export interface IconWithTextProps {
  icon: JSX.Element;
  text: string;
  className?: string;
  onClick?: () => void;
}

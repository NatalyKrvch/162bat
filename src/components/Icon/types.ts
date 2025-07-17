import { JSX } from 'react';

export interface IconProps {
  icon: JSX.Element;
  hoverBgColor?: string;
  as?: 'button' | 'div';
  className?: string;
  onClick?: () => void;
}

import { type JSX } from 'react';

export interface IconButtonProps {
  icon: JSX.Element;
  className?: string;
  onClick?: () => void;
}

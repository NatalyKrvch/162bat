import type { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

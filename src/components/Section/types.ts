import type { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

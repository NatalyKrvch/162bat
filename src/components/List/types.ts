import React from 'react';

export interface ListProps {
  className?: string;
  bulletType?: 'circle' | 'star';
  items: React.ReactNode[];
}

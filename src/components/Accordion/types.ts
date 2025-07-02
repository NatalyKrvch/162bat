import type { ReactNode } from 'react';

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

export interface AccordionProps {
  items: AccordionItem[];
}

import { FormattedTextNode } from '@/components/List/types';

export interface HeroSectionProps {
  data: {
    title: FormattedTextNode[];
    button: {
      title: string;
      url: string;
    };
  };
}

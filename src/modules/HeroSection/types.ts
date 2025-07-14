import { FormattedTextNode } from '@/components/List/types';

export interface HeroSectionProps {
  data: {
    sectionTitle: FormattedTextNode[];
    buttonTitle: string;
    buttonURL: string;
  };
}

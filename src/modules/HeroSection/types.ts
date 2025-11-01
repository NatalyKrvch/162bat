import { type FormattedTextChild } from '@/components/Cards/GuaranteeCard/types';

export interface HeroSectionProps {
  data: {
    sectionTitle: FormattedTextChild[];
    buttonTitle: string;
    buttonURL: string;
  };
}

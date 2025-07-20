import { StageCardProps } from '@/components/Cards/StageCard/types';

export type FinalMessage = {
  title: string;
  description: string;
  callToAction: string;
};

export interface StagesSectionProps {
  data: {
    title: string;
    subtitle: string[];
    steps: StageCardProps[];
    finalMessage: FinalMessage;
  };
}

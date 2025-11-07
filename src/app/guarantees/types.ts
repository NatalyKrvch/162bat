import type { GuaranteesCardType } from '@components/Cards/GuaranteeCard/types';

export interface GuaranteesIntro {
  subtitle: string;
  description: string;
}

export interface GuaranteesPageDataType {
  title: string;
  intro: GuaranteesIntro;
  sections: GuaranteesCardType[];
}

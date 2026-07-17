import { type FormattedTextChild } from '@components/Cards/GuaranteeCard/types';

type FormattedContentItem = {
  id: string;
  children: FormattedTextChild[];
};

type GuaranteesCardType = {
  title: string;
  formattedContent: FormattedContentItem[];
};

type ContractsInfoSectionData = {
  title: string;
  subtitle: string;
  guarantee: GuaranteesCardType;
  buttonText: string;
  readMoreLink: string;
};

export interface ContractsInfoSectionProps {
  data: ContractsInfoSectionData;
}

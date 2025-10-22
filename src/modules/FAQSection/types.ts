import { FAQCardProps } from "@/components/Cards/FAQCard/types";

export interface FAQSectionProps {
    data: {
      title: string;
      readMoreText: string;
      readMoreLink: string;
      introText: string;
      items: FAQCardProps[] 
    };
  }
  
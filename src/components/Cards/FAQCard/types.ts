export interface FAQCardProps {
  question: string;
  answer: {
    text: string;
    list?: string[];
    conclusion?: string;
  };
}

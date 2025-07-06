export interface HistorySectionProps {
  data: {
    title: string;
    readMoreText: string;
    readMoreLink: string;
    introText: string;
    card: {
      title: string;
      description: {
        id: string;
        text: string;
      }[];
    };
  };
}

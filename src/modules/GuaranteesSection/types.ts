export interface GuaranteesSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: {
      bold: string;
      normal: string;
    };
    button: {
      title: string;
      url: string;
    };
  };
}

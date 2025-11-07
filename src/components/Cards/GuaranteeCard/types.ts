export interface FormattedTextChild {
  id: string;
  text: string;
  color: 'white' | 'green' | string;
  fontWeight?: 'normal' | 'bold' | string;
  variant?: 'number' | 'text';
}

export interface FormattedTextItem {
  id: string;
  children: string | FormattedTextChild[];
}

export interface GuaranteesCardType {
  title: string;
  formattedContent: FormattedTextItem[];
}

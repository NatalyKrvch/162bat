export interface FormattedTextChild {
  id: string;
  text: string;
  color: 'white' | 'green';
  fontWeight?: 'normal' | 'bold';
  variant?: 'number' | 'text';
}

export interface FormattedTextItem {
  id: string;
  children: FormattedTextChild[];
}

export interface GuaranteesCardType {
  title: string;
  formattedContent: FormattedTextItem[];
}

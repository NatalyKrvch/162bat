export type BulletType = 'circle' | 'star';

export type TextVariant = 'number' | 'text';

export type FormattedTextNode = {
  id: string;
  fontWeight: string;
  text: string;
  color?: string;
  variant?: TextVariant;
};

export type ListItem = {
  id: string;
  children: string | FormattedTextNode[];
};

export interface ListProps {
  listItems: ListItem[];
  bulletType?: BulletType;
  className?: string;
}

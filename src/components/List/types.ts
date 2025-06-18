export type BulletType = 'circle' | 'star';

export type TextVariant = 'number' | 'text';

export type FormattedTextNode = {
  id: string;
  color?: string;
  fontWeight: string;
  text: string;
  variant?: TextVariant;
};

export type ListItem = {
  id: string;
  children: string | FormattedTextNode[];
};

export interface ListProps {
  className?: string;
  bulletType?: BulletType;
  listItems: ListItem[];
}

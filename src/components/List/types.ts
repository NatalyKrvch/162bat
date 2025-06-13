export type BulletType = 'circle' | 'star';

export type SimpleListItem = string;

export type RichListItem = {
  color?: string;
  fontWeight?: string;
  text?: string;
};

export type ListItem = SimpleListItem | RichListItem[];

export interface ListProps {
  className?: string;
  bulletType?: BulletType;
  listItems: ListItem[];
}

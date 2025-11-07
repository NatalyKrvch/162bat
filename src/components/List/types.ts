import { type FormattedTextItem } from '@components/Cards/GuaranteeCard/types';

export type BulletType = 'circle' | 'star';

export type TextVariant = 'number' | 'text';

export interface ListProps {
  listItems: FormattedTextItem[];
  bulletType?: BulletType;
  className?: string;
}

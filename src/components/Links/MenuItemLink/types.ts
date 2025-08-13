type ItemVarianrt = 'footerItem' | 'headerItem';

export interface MenuItemLinkProps {
  text: string;
  href: string;
  variant?: ItemVarianrt;
  className?: string;
}

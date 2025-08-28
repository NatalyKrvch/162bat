import type { MenuItemVariant } from './MenuItemLink.variants';

export interface MenuItemLinkProps {
  text: string;
  href: string;
  variant?: MenuItemVariant;
  className?: string;
}

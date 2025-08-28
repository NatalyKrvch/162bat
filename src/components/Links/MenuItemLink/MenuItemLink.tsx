import { twMerge } from 'tailwind-merge';

import { InternalLink } from '@/components/Links/InternalLink';

import { ItemVariants, MenuItemVariant } from './MenuItemLink.variants';
import type { MenuItemLinkProps } from './types';

const MenuItemLink = ({
  text,
  href,
  variant = MenuItemVariant.HeaderItem,
  className = '',
}: MenuItemLinkProps) => {
  return (
    <InternalLink
      href={href}
      className={twMerge(
        'cursor-pointer text-base leading-none tracking-normal text-white',
        ItemVariants[variant],
        className,
      )}
    >
      {text}
    </InternalLink>
  );
};

export default MenuItemLink;

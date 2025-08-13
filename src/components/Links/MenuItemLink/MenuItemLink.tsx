import { twMerge } from 'tailwind-merge';

import { InternalLink } from '@/components/Links/InternalLink';

import { MenuItemLinkProps } from './types';

const ItemVariants = {
  headerItem:
    'w-full h-15 bg-transparent hover:bg-(--color-bg-secondary) active:bg-(--color-btn-text-hover-secondary) p-4',
  footerItem:
    'hover:text-btn-text-hover-secondary active:text-btn-text-click-secondary min-w-fit text-base leading-none font-bold tracking-normal lg:text-xl',
};

const MenuItemLink = ({
  text,
  href,
  variant = 'headerItem',
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

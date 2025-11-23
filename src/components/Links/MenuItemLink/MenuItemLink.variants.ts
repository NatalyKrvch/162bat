export enum MenuItemVariant {
  FooterItem = 'footerItem',
  HeaderItem = 'headerItem',
}

export const ItemVariants = {
  [MenuItemVariant.HeaderItem]:
    'w-full h-15 bg-transparent hover:bg-(--color-bg-primary) active:bg-(--color-btn-text-hover-secondary) p-4',
  [MenuItemVariant.FooterItem]:
    'hover:text-btn-text-hover-secondary active:text-green min-w-fit text-base leading-none font-bold tracking-normal lg:text-xl',
};

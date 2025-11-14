export enum NavigationVariant {
  Header = 'header',
  Footer = 'footer',
}

export const NavigationVariants = {
  [NavigationVariant.Header]: 'flex flex-col gap-0',
  [NavigationVariant.Footer]:
    'mb-10 flex flex-col items-end gap-2 xl:items-center xl:flex-row md:gap-x-11',
};

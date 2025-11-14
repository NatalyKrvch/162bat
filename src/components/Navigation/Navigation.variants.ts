export enum NavigationVariant {
  Header = 'header',
  Footer = 'footer',
}

export const NavigationVariants = {
  [NavigationVariant.Header]: 'flex flex-col gap-0',
  [NavigationVariant.Footer]:
    'mb-10 flex flex-col gap-2 sm:flex-row md:gap-x-11',
};

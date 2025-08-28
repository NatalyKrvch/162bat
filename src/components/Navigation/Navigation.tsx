import { type PropsWithChildren } from 'react';

import { NAVIGATION_TEST_ID } from '@/lib/testIds';

import { NavigationVariant, NavigationVariants } from './Navigation.variants';
import type { NavigationProps } from './types';

const Navigation = ({
  children,
  variant = NavigationVariant.Header,
  className = '',
}: PropsWithChildren<NavigationProps>) => {
  return (
    <nav
      aria-label={`${variant} menu`}
      className={className}
      data-testid={NAVIGATION_TEST_ID}
    >
      <ul className={NavigationVariants[variant]}>{children}</ul>
    </nav>
  );
};

export default Navigation;

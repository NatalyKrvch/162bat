import { type PropsWithChildren } from 'react';

import { NAVIGATION_TEST_ID } from '@/lib/testIds';

import { NavigationProps } from './types';

const Navigation = ({
  children,
  variant = 'header',
  className = '',
}: PropsWithChildren<NavigationProps>) => {
  const listClass =
    variant === 'header'
      ? 'flex flex-col gap-6.75 lg:gap-0'
      : 'mb-10 flex flex-col gap-2 sm:flex-row md:gap-x-11';

  return (
    <nav
      aria-label={`${variant} menu`}
      className={className}
      data-testid={NAVIGATION_TEST_ID}
    >
      <ul className={listClass}>{children}</ul>
    </nav>
  );
};

export default Navigation;

import Link from 'next/link';
import { type PropsWithChildren } from 'react';

import { INTERNAL_LINK_TEST_ID } from '../testIds';
import { InternalLinkProps } from './types';

const InternalLink = ({
  href,
  title,
  className,
  children,
}: PropsWithChildren<InternalLinkProps>) => {
  return (
    <Link
      href={href}
      title={title}
      className={`hover:text-btn-text-hover-secondary active:text-btn-text-click-secondary text-base/4 sm:text-xl/5 ${className || ''}`}
      data-testid={INTERNAL_LINK_TEST_ID}
    >
      {children}
    </Link>
  );
};

export default InternalLink;

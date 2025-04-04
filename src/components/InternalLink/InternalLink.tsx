import Link from 'next/link';
import { type PropsWithChildren } from 'react';

import { INTERNAL_LINK_TEST_ID } from '@/lib/testIds';

import { InternalLinkProps } from './types';

const InternalLink = ({
  href,
  title,
  className,
  children,
}: PropsWithChildren<InternalLinkProps>) => {
  return (
    <Link
      prefetch
      href={href}
      title={title}
      className={className}
      data-testid={INTERNAL_LINK_TEST_ID}
    >
      {children}
    </Link>
  );
};

export default InternalLink;

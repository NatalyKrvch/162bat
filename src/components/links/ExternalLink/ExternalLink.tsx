import { type PropsWithChildren } from 'react';

import { EXTERNAL_LINK_TEST_ID } from '@/lib/testIds';

import { ExternalLinkProps } from './types';

const ExternalLink = ({
  href,
  title,
  className,
  children,
}: PropsWithChildren<ExternalLinkProps>) => {
  return (
    <a
      href={href}
      title={title}
      className={className}
      data-testid={EXTERNAL_LINK_TEST_ID}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;

import type { PropsWithChildren } from 'react';

import { Container } from '@/components/Container';
import { SECTION_TEST_ID } from '@/lib/testIds';

import type { SectionProps } from './types';

const Section = ({
  id,
  children,
  className,
  containerClassName,
  fullWidth = false,
  ...props
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      id={id}
      className={className}
      data-testid={SECTION_TEST_ID}
      {...props}
    >
      <Container fullWidth={fullWidth} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;

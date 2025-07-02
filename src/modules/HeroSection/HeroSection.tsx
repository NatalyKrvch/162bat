import { Button, Container, InternalLink } from '@/components';
import { HERO_SECTION_TEST_ID } from '@/lib/testIds';
import { getFormattedText } from '@/utils';

import type { HeroSectionProps } from './types';

const HeroSection = ({ data }: HeroSectionProps) => {
  if (!data) {
    return null;
  }

  const { title, button } = data;

  return (
    <Container fullWidth className="bg-hero-section min-h-screen-minus-header">
      <section
        data-testid={HERO_SECTION_TEST_ID}
        className="min-h-screen-minus-header flex flex-col items-center justify-center gap-10"
      >
        <h1 className="max-w-3xl text-center text-4xl sm:text-6xl">
          {getFormattedText(title)}
        </h1>
        <InternalLink href={button.url}>
          <Button>{button.title}</Button>
        </InternalLink>
      </section>
    </Container>
  );
};

export default HeroSection;

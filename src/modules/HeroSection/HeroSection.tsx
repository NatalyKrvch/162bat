import { Button, Container, InternalLink } from '@/components';
import { HERO_SECTION_TEST_ID } from '@/lib/testIds';
import { getFormattedText } from '@/utils';

import type { HeroSectionProps } from './types';

const HeroSection = ({ data }: HeroSectionProps) => {
  if (!data) {
    return null;
  }

  const { sectionTitle, buttonTitle, buttonURL } = data;

  return (
    <Container
      fullWidth
      className="min-h-screen-minus-header relative overflow-hidden"
    >
      <div className="bg-hero-section absolute inset-0 opacity-70"></div>
      <section
        data-testid={HERO_SECTION_TEST_ID}
        className="min-h-screen-minus-header relative z-10 flex flex-col items-center justify-center gap-10"
      >
        <h1 className="text-4xl-40 max-w-3xl cursor-default text-center leading-none font-bold tracking-normal md:text-6xl lg:text-[64px]">
          {getFormattedText(sectionTitle)}
        </h1>
        <InternalLink href={buttonURL}>
          <Button className="text-xl leading-none font-bold tracking-normal md:text-2xl lg:text-2xl xl:text-2xl">
            {buttonTitle}
          </Button>
        </InternalLink>
      </section>
    </Container>
  );
};

export default HeroSection;

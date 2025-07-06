import {
  BasicCard,
  Button,
  Container,
  InternalLink,
  SectionTitle,
} from '@/components';
import { GUARANTEES_SECTION_TEST_ID } from '@/lib/testIds';

import type { GuaranteesSectionProps } from './types';

const GuaranteesSection = ({ data }: GuaranteesSectionProps) => {
  if (!data) {
    return null;
  }

  const { title, subtitle, description, button } = data;

  return (
    <Container>
      <section
        data-testid={GUARANTEES_SECTION_TEST_ID}
        className="flex flex-col items-center gap-10"
      >
        <div className="flex flex-col gap-8">
          <SectionTitle className="text-left">{title}</SectionTitle>
          <h3 className="md:text-lg">{subtitle}</h3>
        </div>
        <BasicCard
          hasBorder={false}
          className="bg-guarantees-section h-guarantees-section flex flex-col items-center justify-center gap-6 px-4 sm:gap-8 md:px-8 lg:gap-10 lg:px-20"
        >
          <p className="max-w-4xl text-center text-xl sm:text-2xl">
            <span className="font-bold uppercase">{description.bold}</span>
            {' ' + description.normal}
          </p>
          <InternalLink href={button.url}>
            <Button variant="secondary" className="font-bold">
              {button.title}
            </Button>
          </InternalLink>
        </BasicCard>
      </section>
    </Container>
  );
};

export default GuaranteesSection;

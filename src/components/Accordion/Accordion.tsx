import * as AccordionRadix from '@radix-ui/react-accordion';

import { ACCORDION_TEST_ID } from '@/lib/testIds';

import { BasicCard } from '../CardsFolder/BasicCard';
import { Divider } from '../Divider';
import { Chevron } from '../IconsFolder/Chevron';
import type { AccordionProps } from './types';

const Accordion = ({ items }: AccordionProps) => {
  if (items.length === 0) return null;

  return (
    <AccordionRadix.Root
      type="single"
      collapsible
      className="flex flex-col gap-4"
      data-testid={ACCORDION_TEST_ID}
    >
      {items.map(({ id, title, content }) => (
        <AccordionRadix.Item value={id} key={id} className="group">
          <BasicCard gradientPosition="left" className="p-0">
            <AccordionRadix.Header>
              <AccordionRadix.Trigger className="group-data-[state=open]:text-main flex w-full cursor-pointer items-center justify-between p-6 text-lg font-bold sm:p-8 sm:text-2xl md:py-10">
                {title}
                <Chevron className="group-data-[state=open]:stroke-main group-data-[state=open]:rotate-180" />
              </AccordionRadix.Trigger>
            </AccordionRadix.Header>
            <AccordionRadix.Content
              data-testid={`accordion-content-${id}`}
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
            >
              <div className="flex flex-col gap-6 p-6 pt-0 sm:gap-8 sm:p-8 sm:pt-0 md:gap-10 md:pt-0 md:pb-10">
                <Divider />
                {content}
              </div>
            </AccordionRadix.Content>
          </BasicCard>
        </AccordionRadix.Item>
      ))}
    </AccordionRadix.Root>
  );
};

export default Accordion;

import * as AccordionRadix from '@radix-ui/react-accordion';

import { ACCORDION_TEST_ID } from '@/lib/testIds';

import { BasicCard } from '../Cards/BasicCard';
import { Divider } from '../Divider';
import { Chevron } from '../Icons/Chevron';
import type { AccordionItem } from './types';

const Accordion = ({ id, title, content }: AccordionItem) => {
  if (!id || !title || !content) return null;

  return (
    <AccordionRadix.Root
      type="single"
      collapsible
      className="flex flex-col"
      data-testid={ACCORDION_TEST_ID}
    >
      <AccordionRadix.Item value={id} className="group">
        <BasicCard gradientPosition="left" className="p-0">
          <AccordionRadix.Header>
            <AccordionRadix.Trigger className="group-data-[state=open]:text-main hover:text-green flex w-full cursor-pointer items-center justify-between p-6 text-lg font-bold sm:p-6 sm:text-2xl md:py-8 lg:text-3xl">
              {title}
              <Chevron className="group-data-[state=open]:stroke-main group-data-[state=open]:rotate-180" />
            </AccordionRadix.Trigger>
          </AccordionRadix.Header>

          <AccordionRadix.Content
            data-testid={`accordion-content-${id}`}
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-6 pt-0 sm:gap-8 sm:p-8 sm:pt-0 md:gap-10 md:pt-0 md:pb-10">
              <Divider variant="grey" />
              {content}
            </div>
          </AccordionRadix.Content>
        </BasicCard>
      </AccordionRadix.Item>
    </AccordionRadix.Root>
  );
};

export default Accordion;

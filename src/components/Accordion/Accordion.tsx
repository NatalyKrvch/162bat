import * as AccordionRadix from '@radix-ui/react-accordion';

import { ACCORDION_TEST_ID } from '@/lib/testIds';

import { BasicCard } from '../BasicCard';
import { Chevron } from '../Chevron';
import { Divider } from '../Divider';
import type { AccordionProps } from './types';

const Accordion = ({ accordionItems }: AccordionProps) => {
  if (accordionItems.length === 0) return null;

  return (
    <>
      <AccordionRadix.Root
        type="single"
        defaultValue={accordionItems[0].id}
        collapsible
        className="flex flex-col gap-4"
        data-testid={ACCORDION_TEST_ID}
      >
        {accordionItems.map(({ id, title, content }) => (
          <AccordionRadix.Item value={id} key={id} className="group">
            <BasicCard gradientPosition="left" className="p-6 sm:p-8 md:py-10">
              <AccordionRadix.Header>
                <AccordionRadix.Trigger className="group-data-[state=open]:text-main flex w-full items-center justify-between text-lg font-bold sm:text-2xl">
                  {title}
                  <Chevron className="group-data-[state=open]:stroke-main transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionRadix.Trigger>
              </AccordionRadix.Header>
              <AccordionRadix.Content
                data-testid={`accordion-content-${id}`}
                className="mt-6 flex flex-col gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:gap-10"
              >
                <Divider />
                {content}
              </AccordionRadix.Content>
            </BasicCard>
          </AccordionRadix.Item>
        ))}
      </AccordionRadix.Root>
    </>
  );
};

export default Accordion;

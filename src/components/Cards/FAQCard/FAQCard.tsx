import { twMerge } from 'tailwind-merge';

import { FAQ_CARD_TEST_ID } from '@/lib/testIds';

import type { FAQCardProps } from './types';
import { Divider } from '@/components/Divider';
const FAQCard = ({ question, answer }: FAQCardProps) => {
  return (
    <article
      data-testid={FAQ_CARD_TEST_ID}
      className={twMerge('mt-8 flex flex-col')}
    >
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        <h4 className="w-full shrink-0 text-base leading-[150%] font-bold whitespace-pre-line lg:w-[412px] lg:text-2xl lg:leading-[120%]">
          {question}
        </h4>
        <div className="flex flex-1 flex-col gap-3 lg:text-2xl">
          <p>{answer && answer.text}</p>
        </div>
      </div>

      <Divider className="mt-8 w-full" />
    </article>
  );
};

export default FAQCard;

'use client';

import { twMerge } from 'tailwind-merge';

import { BasicCard } from '@/components';
import { List } from '@/components/List';
import { ROLES_CARD_TEST_ID } from '@/lib/testIds';

import type { RolesCardProps } from './types';

const RolesCard = ({ title, list }: RolesCardProps) => {
  if (!title.trim() || !list.length) {
    return null;
  }

  const refactoredList = list.map((item, index) => ({
    id: index.toString(),
    children: item,
  }));

  return (
    <article
      data-testid={ROLES_CARD_TEST_ID}
      className="flex h-full w-full min-w-0 flex-col overflow-hidden"
    >
      <BasicCard
        hasBorder={true}
        gradientPosition="left"
        className={twMerge(
          'border-grey h-full w-full min-w-0 gap-4 border-1 border-t-0 p-5.5 lg:px-8 lg:py-10',
        )}
      >
        <h4 className="mb-8 text-[20px] leading-[150%] font-bold whitespace-pre-line lg:text-[32px] lg:leading-[120%]">
          {title.trim()}
        </h4>

        <div className="gap-3 lg:text-xl">
          <List listItems={refactoredList} />
        </div>
      </BasicCard>
    </article>
  );
};

export default RolesCard;

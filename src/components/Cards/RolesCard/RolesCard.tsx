import { twMerge } from 'tailwind-merge';

import { List } from '@/components/List';
import { ROLES_CARD_TEST_ID } from '@/lib/testIds';

import type { RolesCardProps } from './types';

const RolesCard = ({ title, list }: RolesCardProps) => {
  if (!title.trim() || !list.length) {
    return null;
  }

  const hasTitle = !!title?.trim();
  const hasList = (list.length ?? 0) > 0;
 
  const refactoredList= hasList
  ?  list.map((item, index) => ({
      id: index.toString(),
      children: item,
    }))
  : [];

  return (
    <article
      data-testid={ROLES_CARD_TEST_ID}
      className={twMerge('mt-8 flex flex-col w-full min-w-0 overflow-hidden rounded-default bg-card-gradient-top pt-px')}
    >
      <div className="w-full min-w-0 gap-4 bg-bg-secondary border-grey rounded-inner-card border-1 border-t-0 p-5.5 lg:px-8 lg:py-10">
        <h4 className="  text-base leading-[150%] font-bold whitespace-pre-line lg:w-[412px] lg:text-2xl lg:leading-[120%]">
          {hasTitle && title.trim()}
        </h4>
        <div className="  gap-3 lg:text-2xl">
          {hasList && <List listItems={refactoredList}   />}
         </div>
      </div>
    </article>
  );
};

export default RolesCard;

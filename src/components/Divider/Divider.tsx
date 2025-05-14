import { DIVIDER_TEST_ID } from '@/lib/testIds';

import { DividerProps } from './types';

const Divider = ({ variant = 'gradient' }: DividerProps) => {
  const isGreyVariant = variant === 'grey';

  return (
    <div
      role="separator"
      data-testid={DIVIDER_TEST_ID}
      className={`relative h-0.5 w-full ${isGreyVariant ? 'bg-grey' : 'bg-divider-gradient'}`}
    >
      <span
        className={`absolute inset-0 h-full w-full ${isGreyVariant ? 'divider-stripes-4' : 'divider-stripes-8'}`}
      ></span>
    </div>
  );
};

export default Divider;

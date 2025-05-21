import { type PropsWithChildren } from 'react';

import { SECTION_TITLE_TEST_ID } from '@/lib/testIds';

const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2
      data-testid={SECTION_TITLE_TEST_ID}
      className="w-full text-center text-2xl/7 font-bold uppercase sm:text-5xl/13 md:text-6xl/16"
    >
      {children}
    </h2>
  );
};

export default SectionTitle;

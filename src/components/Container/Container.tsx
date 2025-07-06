import { type PropsWithChildren } from 'react';

import { CONTAINER_TEST_ID } from '@/lib/testIds';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div
      data-testid={CONTAINER_TEST_ID}
      className="container-width px-4 md:px-8 xl:px-20"
    >
      {children}
    </div>
  );
};

export default Container;

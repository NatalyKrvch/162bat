import { ARROW_TEST_ID } from '@/lib/testIds';

import { ArrowProps } from './types';

const Arrow = ({ direction }: ArrowProps) => {
  const isLeftDirection = direction === 'left';

  return (
    <svg
      className={isLeftDirection ? 'rotate-180' : ''}
      data-testid={ARROW_TEST_ID}
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="16"
      fill="currentColor"
      viewBox="0 0 37 16"
    >
      <path d="M36.707 8.707a1 1 0 0 0 0-1.414L30.343.929a1 1 0 1 0-1.414 1.414L34.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414zM36 7H0v2h36z"></path>
    </svg>
  );
};

export default Arrow;

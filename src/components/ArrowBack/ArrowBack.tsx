import { ARROW_BACK_TEST_ID } from '@/lib/testIds';

const ArrowBack = () => {
  return (
    <svg
      data-testid={ARROW_BACK_TEST_ID}
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="16"
      fill="currentColor"
      viewBox="0 0 37 16"
    >
      <path d="M.293 7.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L2.414 8l5.657-5.657A1 1 0 0 0 6.657.93zM37 7H1v2h36z"></path>
    </svg>
  );
};

export default ArrowBack;

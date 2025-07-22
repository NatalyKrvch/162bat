import { twMerge } from 'tailwind-merge';

import type { ErrorMessageProps } from './types';

const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <p className={twMerge('text-(--color-text-error)', className)}>
      {message.toString()}
    </p>
  );
};

export default ErrorMessage;

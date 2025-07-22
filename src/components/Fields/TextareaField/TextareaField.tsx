import { twMerge } from 'tailwind-merge';

import { ErrorMessage } from '@/components/ErrorMessage';

import type { TextareaFieldProps } from './types';

const TextareaField = ({
  textareaProps,
  error,
  className,
  placeholder,
}: TextareaFieldProps) => (
  <div className="flex flex-col gap-1">
    <textarea
      {...textareaProps}
      placeholder={placeholder}
      className={twMerge(className, 'resize-none overflow-hidden')}
    />
    <ErrorMessage message={error} />
  </div>
);

export default TextareaField;

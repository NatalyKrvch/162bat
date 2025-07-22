import { ErrorMessage } from '@/components/ErrorMessage';

import type { InputFieldProps } from './types';

const InputField = ({
  inputProps,
  error,
  inputClassName,
  placeholder,
}: InputFieldProps) => (
  <div className="flex flex-col gap-1">
    <input
      {...inputProps}
      placeholder={placeholder}
      className={inputClassName}
    />
    <ErrorMessage message={error} />
  </div>
);

export default InputField;

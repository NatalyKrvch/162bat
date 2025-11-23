import { type FieldError, type UseFormRegisterReturn } from 'react-hook-form';

type Option = {
  value: string;
  label: string;
};

type FormRadioGroupProps = {
  label: string;
  register: UseFormRegisterReturn;
  options: Option[];
  error?: FieldError;
  errorText?: string;
};

export const FormRadioGroup = ({
  label,
  register,
  options,
  error,
  errorText,
}: FormRadioGroupProps) => {
  return (
    <fieldset className="border-green rounded-xl border-2 p-4">
      <legend className="mb-2 text-sm font-medium text-gray-300">
        {label}
      </legend>

      <div className="flex flex-col gap-2">
        {options.map(option => (
          <label
            key={option.value}
            className="inline-flex items-center gap-2 text-gray-300"
          >
            <input
              type="radio"
              value={option.value}
              {...register}
              className="accent-green"
            />
            {option.label}
          </label>
        ))}
      </div>

      {error && <span className="text-sm text-red-600">{errorText}</span>}
    </fieldset>
  );
};

import { type FieldError, type UseFormRegisterReturn } from 'react-hook-form';

type FormCheckboxProps = {
  label: React.ReactNode;
  register: UseFormRegisterReturn;
  error?: FieldError;
  errorText?: string;
};

export const FormCheckbox = ({
  label,
  register,
  error,
  errorText,
}: FormCheckboxProps) => {
  return (
    <div>
      <label className="inline-flex items-start gap-2 text-gray-300">
        <input type="checkbox" {...register} className="accent-green mt-1" />
        <span>{label}</span>
      </label>

      {error && (
        <span className="mt-1 block text-sm text-red-600">{errorText}</span>
      )}
    </div>
  );
};

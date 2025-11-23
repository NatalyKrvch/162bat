import { type HTMLInputTypeAttribute } from 'react';
import { type FieldError, type UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
  label: string;
  placeholder?: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
  error?: FieldError;
  errorText?: string;
};

const FormInput = ({
  label,
  id,
  type = 'text',
  placeholder,
  register,
  error,
  errorText,
}: FormInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className="border-green focus:border-green focus:ring-green w-full rounded-xl border-2 px-4 py-2 text-gray-100 placeholder-gray-400 transition outline-none focus:ring-2"
      />

      {error && (
        <span className="text-sm text-red-600">
          {error.message || errorText}
        </span>
      )}
    </div>
  );
};

export default FormInput;

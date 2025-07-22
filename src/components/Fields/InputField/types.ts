import { UseFormRegisterReturn } from 'react-hook-form';
export interface InputFieldProps {
  inputProps: UseFormRegisterReturn;
  inputClassName: string;
  error?: string;
  placeholder?: string;
}

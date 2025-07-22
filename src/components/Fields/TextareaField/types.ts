import { UseFormRegisterReturn } from 'react-hook-form';

export interface TextareaFieldProps {
  textareaProps: UseFormRegisterReturn;
  className?: string;
  placeholder?: string;
  error?: string;
}

import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { IMaskInputProps } from 'react-imask';

export type MaskedFieldProps<TFieldValues extends FieldValues> =
  IMaskInputProps<HTMLInputElement> & {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
    error?: string;
  };

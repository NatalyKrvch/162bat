'use client';

import { Controller, FieldValues } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import { ErrorMessage } from '@/components/ErrorMessage';

import type { MaskedFieldProps } from './types';

const MaskedField = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  error,
  ...inputMaskProps
}: MaskedFieldProps<TFieldValues>) => (
  <div className="flex flex-col gap-1">
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => <IMaskInput {...inputMaskProps} {...field} />}
    />
    <ErrorMessage message={error} />
  </div>
);

export default MaskedField;

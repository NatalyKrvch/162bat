'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { getInputClasses } from '../helpers';
import type { FormData } from '../types';

export const useApplicationForm = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const getFieldClasses = (fieldName: keyof FormData) =>
    getInputClasses(fieldName, errors, touchedFields, watch(fieldName));

  return {
    control,
    register,
    handleSubmit,
    onSubmit,
    errors,
    getFieldClasses,
    isPhoneFocused,
    setIsPhoneFocused,
  };
};

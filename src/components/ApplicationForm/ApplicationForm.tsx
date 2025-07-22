'use client';

import { isFullNameValid, isValidDate } from '@/utils';

import { Button } from '../Button';
import { InputField, MaskedField, TextareaField } from '../Fields';
import { useApplicationForm } from './hooks';
import type { ApplicationFormProps } from './types';

const ApplicationForm = ({
  placeholders,
  errors: errorMessages,
  masks,
  button,
}: ApplicationFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    onSubmit,
    errors,
    getFieldClasses,
    isPhoneFocused,
    setIsPhoneFocused,
  } = useApplicationForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4 xl:gap-6"
    >
      <InputField
        inputProps={register('fullName', {
          required: errorMessages.required,
          validate: value =>
            isFullNameValid(value) || errorMessages.invalidFullName,
        })}
        placeholder={placeholders.fullName}
        inputClassName={getFieldClasses('fullName')}
        error={errors.fullName?.message?.toString()}
      />

      <MaskedField
        name="birthDate"
        control={control}
        rules={{
          required: errorMessages.required,
          validate: value => isValidDate(value) || errorMessages.invalidDate,
        }}
        placeholder={placeholders.birthDate}
        mask={masks.birthDate}
        className={getFieldClasses('birthDate')}
        error={errors.birthDate?.message?.toString()}
      />

      <MaskedField
        name="phone"
        control={control}
        rules={{
          validate: value => {
            const rawValue = value ?? '';
            const cleaned = rawValue.replace(/\D/g, '');

            if (!cleaned) {
              return errorMessages.required;
            }

            if (cleaned.length !== 12) {
              return errorMessages.invalidPhone;
            }

            return true;
          },
        }}
        placeholder={placeholders.phone}
        mask={masks.phone}
        className={getFieldClasses('phone')}
        error={errors.phone?.message?.toString()}
        lazy={!isPhoneFocused}
        onFocus={() => setIsPhoneFocused(true)}
        onBlur={() => setIsPhoneFocused(false)}
      />

      <InputField
        inputProps={register('placeOfLiving', {
          required: errorMessages.required,
        })}
        placeholder={placeholders.placeOfLiving}
        inputClassName={getFieldClasses('placeOfLiving')}
        error={errors.placeOfLiving?.message?.toString()}
      />

      <InputField
        inputProps={register('position', {
          required: errorMessages.required,
        })}
        placeholder={placeholders.position}
        inputClassName={getFieldClasses('position')}
        error={errors.position?.message?.toString()}
      />

      <TextareaField
        textareaProps={register('reason')}
        className={getFieldClasses('reason')}
        placeholder={placeholders.reason}
        error={errors.reason?.message?.toString()}
      />

      <div className="flex justify-center">
        <Button type="submit" className="w-full md:w-[410px]">
          {button.submit}
        </Button>
      </div>
    </form>
  );
};

export default ApplicationForm;

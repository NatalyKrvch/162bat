'use client';

import { isFullNameValid, isValidDate } from '@/utils';

import { Button } from '../Button';
import { InputField, MaskedField, TextareaField } from '../Fields';
import { useApplicationForm } from './hooks';

const ApplicationForm = () => {
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
          required: 'Це поле обовʼязкове',
          validate: isFullNameValid,
        })}
        placeholder="ПІБ *"
        inputClassName={getFieldClasses('fullName')}
        error={errors.fullName?.message?.toString()}
      />

      <MaskedField
        name="birthDate"
        control={control}
        rules={{
          required: 'Це поле обовʼязкове',
          validate: isValidDate,
        }}
        placeholder="Дата народження чч.мм.рр *"
        mask="00.00.0000"
        className={getFieldClasses('birthDate')}
        error={errors.birthDate?.message?.toString()}
      />

      <MaskedField
        name="phone"
        control={control}
        rules={{
          required: 'Це поле обовʼязкове',
          validate: value =>
            value?.includes('_') ? 'Введіть повний номер' : true,
        }}
        placeholder="+38 (___) ___-__-__ *"
        mask="+38 (000) 000-00-00"
        className={getFieldClasses('phone')}
        error={errors.phone?.message?.toString()}
        lazy={!isPhoneFocused}
        onFocus={() => setIsPhoneFocused(true)}
        onBlur={() => setIsPhoneFocused(false)}
      />

      <InputField
        inputProps={register('placeOfLiving', {
          required: 'Це поле обовʼязкове',
        })}
        placeholder="Поточне місце перебування *"
        inputClassName={getFieldClasses('placeOfLiving')}
        error={errors.placeOfLiving?.message?.toString()}
      />

      <InputField
        inputProps={register('position', {
          required: 'Це поле обовʼязкове',
        })}
        placeholder="Яку посаду розглядаєте? *"
        inputClassName={getFieldClasses('position')}
        error={errors.position?.message?.toString()}
      />

      <TextareaField
        textareaProps={register('reason')}
        className={getFieldClasses('reason')}
        placeholder="Чому ви обираєте нас?"
        error={errors.reason?.message?.toString()}
      />

      <div className="flex justify-center">
        <Button type="submit" className="w-full md:w-[410px]">
          Відправити заявку
        </Button>
      </div>
    </form>
  );
};

export default ApplicationForm;

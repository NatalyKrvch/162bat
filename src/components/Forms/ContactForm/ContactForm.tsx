'use client';

import { FormCheckbox } from '@components/FormControls/FormCheckbox';
import FormInput from '@components/FormControls/FormInput';
import { FormRadioGroup } from '@components/FormControls/FormRadioGroup';
import { type ContactFormProps } from '@components/Forms/ContactForm/types';
import { useForm } from 'react-hook-form';

import { InternalLink } from '@/components';
import { Button } from '@/components/Buttons/Button';

const ContactForm = ({ data }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps['data']>();

  if (!data) return null;

  const onSubmit = (formData: ContactFormProps['data']) => {
    console.log(formData);
  };

  const {
    surname,
    required,
    name,
    lastname,
    tel,
    tgName,
    position,
    isMilitaryLabel,
    yes,
    no,
    policy1,
    policy2,
    submit,
  } = data;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-8 text-gray-200 lg:grid-cols-2"
    >
      <div className="flex flex-col gap-6">
        <FormInput
          id="surname"
          label={surname}
          placeholder={surname}
          register={register('surname', { required: true })}
          error={errors.surname}
          errorText={required}
        />

        <FormInput
          id="name"
          label={name}
          placeholder={name}
          register={register('name', { required: true })}
          error={errors.name}
          errorText={required}
        />

        <FormInput
          id="lastname"
          label={lastname}
          placeholder={lastname}
          register={register('lastname', { required: true })}
          error={errors.lastname}
          errorText={required}
        />

        <FormInput
          id="tel"
          label={tel}
          type="tel"
          placeholder="+380..."
          register={register('tel', {
            required,
            pattern: {
              value: /^(?:\+380|0)\d{9}$/,
              message: 'Почніть номер з +380 або з 0',
            },
          })}
          error={errors.tel}
          errorText={required}
        />
      </div>

      <div className="flex flex-col gap-6">
        <FormInput
          id="tgName"
          label={tgName}
          placeholder="@username"
          register={register('tgName')}
        />

        <FormInput
          id="position"
          label={position}
          placeholder={position}
          register={register('position')}
        />

        <FormRadioGroup
          label={isMilitaryLabel}
          register={register('isMilitary', { required: true })}
          options={[
            { value: 'true', label: yes },
            { value: 'false', label: no },
          ]}
          error={errors.isMilitary}
          errorText={required}
        />

        <FormCheckbox
          label={
            <>
              {policy1}
              <InternalLink
                href="/privacy-policy"
                className="text-green font-bold hover:underline"
              >
                {policy2}
              </InternalLink>
            </>
          }
          register={register('privacyPolicyAccepted', { required: true })}
          error={errors.privacyPolicyAccepted}
          errorText={required}
        />

        <Button variant="primary" className="font-bold" type="submit">
          {submit}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

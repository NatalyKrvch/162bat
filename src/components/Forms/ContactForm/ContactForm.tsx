'use client';

import { FormCheckbox } from '@components/FormControls/FormCheckbox';
import FormInput from '@components/FormControls/FormInput';
import { FormRadioGroup } from '@components/FormControls/FormRadioGroup';
import { type ContactFormProps } from '@components/Forms/ContactForm/types';
import { Turnstile } from '@marsidev/react-turnstile';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { InternalLink } from '@/components';
import { Button } from '@/components/Buttons/Button';

const ContactForm = ({ data }: ContactFormProps) => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormProps['data']>();

  if (!data) return null;

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

  const onSubmit = async (formData: ContactFormProps['data']) => {
    if (!turnstileToken) {
      alert('Будь ласка, зачекайте перевірки капчі (Я не робот)');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Помилка при відправці');
      }

      setStatus('success');
      reset();
      setTurnstileToken(null);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

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

        <div className="my-2 min-h-[65px]">
          {status !== 'success' && (
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
              onSuccess={token => setTurnstileToken(token)}
              options={{ theme: 'dark' }}
            />
          )}
        </div>

        <div className="flex flex-col gap-3">
          <Button
            variant="primary"
            className="font-bold disabled:cursor-not-allowed disabled:opacity-50"
            type="submit"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Відправка...' : submit}
          </Button>

          {status === 'success' && (
            <div className="rounded border border-green-500 bg-green-900/20 p-3 text-center text-green-400">
              ✅ Дякуємо! Вашу заявку успішно відправлено.
            </div>
          )}

          {status === 'error' && (
            <div className="rounded border border-red-500 bg-red-900/20 p-3 text-center text-red-400">
              ❌ Помилка. Спробуйте ще раз пізніше.
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

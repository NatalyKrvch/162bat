'use client';

import { Button } from '@/components/Buttons/Button';
import { SubmitHandler, useForm } from 'react-hook-form';

const ContactForm = ({ data }: ContactFormProps) => {
  if (!data) {
    return null;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps.data>();
  const onSubmit: SubmitHandler<ContactFormProps> = data => console.log(data);
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
    isAdultLabel,
    policy1,
    policy2,
    submit,
  } = data;

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-8 text-gray-200 lg:grid-cols-2"
      >
        <div className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="surname"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              {surname}
            </label>
            <input
              id="surname"
              type="text"
              placeholder={surname}
              {...register('surname', { required: true })}
              className="w-full rounded-xl border border-gray-600 bg-gray-800/50 px-4 py-2 text-gray-100 placeholder-gray-400 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
            />
            {errors.surname && (
              <span className="text-sm text-red-500">{required}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              {name}
            </label>
            <input
              id="name"
              type="text"
              placeholder={name}
              {...register('name', { required: true })}
              className="w-full rounded-xl border border-gray-600 bg-gray-800/50 px-4 py-2 text-gray-100 placeholder-gray-400 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
            />
            {errors.name && (
              <span className="text-sm text-red-500">{required}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              {lastname}
            </label>
            <input
              id="lastname"
              type="text"
              placeholder={lastname}
              {...register('lastname', { required: true })}
              className="w-full rounded-xl border border-gray-600 bg-gray-800/50 px-4 py-2 text-gray-100 placeholder-gray-400 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
            />
            {errors.lastname && (
              <span className="text-sm text-red-500">{required}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="tel"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              {tel}
            </label>
            <input
              id="tel"
              type="tel"
              placeholder="+380..."
              {...register('tel', {
                required: required,
                pattern: {
                  value: /^(?:\+380|0)\d{9}$/,
                  message: 'Невірний формат номера телефону',
                },
              })}
              className="w-full rounded-xl border border-gray-600 bg-gray-800/50 px-4 py-2 text-gray-100 placeholder-gray-400 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
            />
            {errors.tel && (
              <span className="text-sm text-red-500">
                {errors.tel.message || required}
              </span>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="tgName"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              {tgName}
            </label>
            <input
              id="tgName"
              type="text"
              placeholder="@username"
              {...register('tgName')}
              className="w-full rounded-xl border border-gray-600 bg-gray-800/50 px-4 py-2 text-gray-100 placeholder-gray-400 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
            />
          </div>

          <div>
            <label
              htmlFor="position"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              {position}
            </label>
            <input
              id="position "
              type="text"
              placeholder={position}
              {...register('position')}
              className="w-full rounded-xl border border-gray-600 bg-gray-800/50 px-4 py-2 text-gray-100 placeholder-gray-400 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
            />
          </div>
          <fieldset className="rounded-xl border border-gray-700 p-4">
            <legend className="mb-2 text-sm font-medium text-gray-300">
              {isMilitaryLabel}
            </legend>
            <div className="flex flex-col gap-2">
              <label className="inline-flex items-center gap-2 text-gray-300">
                <input
                  type="radio"
                  value="true"
                  {...register('isMilitary', { required: true })}
                  className="accent-orange-500"
                />
                {yes}
              </label>
              <label className="inline-flex items-center gap-2 text-gray-300">
                <input
                  type="radio"
                  value="false"
                  {...register('isMilitary', { required: true })}
                  className="accent-orange-500"
                />
                {no}
              </label>
            </div>
            {errors.isMilitaryLabel && (
              <span className="text-sm text-red-500"> {required}</span>
            )}
          </fieldset>

          <div>
            <label className="inline-flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                {...register('isAdult', { required: true })}
                className="accent-orange-500"
              />
              {isAdultLabel}
            </label>
            {errors.isAdult && (
              <span className="mt-1 block text-sm text-red-500">
                {required}
              </span>
            )}
          </div>

          <div>
            <label className="inline-flex items-start gap-2 text-gray-300">
              <input
                type="checkbox"
                {...register('privacyPolicyAccepted', { required: true })}
                className="mt-1 accent-orange-500"
              />
              <span>
                {policy1}{' '}
                <a href="#" className="text-orange-400 hover:underline">
                  {policy2}
                </a>
              </span>
            </label>
            {errors.privacyPolicyAccepted && (
              <span className="mt-1 block text-sm text-red-500">
                {required}
              </span>
            )}
          </div>

          <div>
            <Button variant="primary" type="submit">
              {submit}{' '}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

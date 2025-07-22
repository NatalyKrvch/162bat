import type { Meta, StoryObj } from '@storybook/react';

import ApplicationForm from './ApplicationForm';

const meta: Meta<typeof ApplicationForm> = {
  title: 'ApplicationForm',
  component: ApplicationForm,
};

export default meta;

type Story = StoryObj<typeof ApplicationForm>;

const mockProps = {
  placeholders: {
    fullName: 'ПІБ *',
    birthDate: 'Дата народження чч.мм.рр *',
    phone: '+38 (___) ___-__-__ *',
    placeOfLiving: 'Поточне місце перебування *',
    position: 'Яку посаду розглядаєте? *',
    reason: 'Чому ви обираєте нас?',
  },
  errors: {
    required: 'Це поле обовʼязкове',
    invalidFullName: 'Невірний формат ПІБ',
    invalidDate: 'Невірна дата',
    invalidPhone: 'Невірний номер телефону',
  },
  masks: {
    birthDate: '00.00.0000',
    phone: '+38 (000) 000-00-00',
  },
  button: {
    submit: 'Відправити заявку',
  },
};

export const Default: Story = {
  render: () => <ApplicationForm {...mockProps} />,
};

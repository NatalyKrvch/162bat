import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'InputField',
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

const Template: React.FC<
  Omit<React.ComponentProps<typeof InputField>, 'inputProps'>
> = args => {
  const { register } = useForm();
  return <InputField {...args} inputProps={register('testField')} />;
};

export const Default: Story = {
  render: args => <Template {...args} />,
  args: {
    placeholder: 'Введіть значення',
    inputClassName: 'border p-2',
  },
};

export const WithError: Story = {
  render: args => <Template {...args} />,
  args: {
    placeholder: 'Введіть значення',
    inputClassName: 'border p-2',
    error: 'Це поле обовʼязкове',
  },
};

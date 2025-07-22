import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import MaskedField from './MaskedField';

const meta: Meta<typeof MaskedField> = {
  title: 'MaskedField',
  component: MaskedField,
};

export default meta;

type Story = StoryObj<typeof MaskedField>;

const Template = (
  args: Omit<React.ComponentProps<typeof MaskedField>, 'name' | 'control'>,
) => {
  const { control } = useForm();

  return (
    <MaskedField
      {...args}
      name="birthDate"
      control={control}
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      mask={args.mask as any}
      className={
        'rounded-default transition-color-base w-full appearance-none border bg-(--color-form-color) p-3 placeholder-(--color-description) outline-none focus:outline-none'
      }
    />
  );
};

export const DateField: Story = {
  render: args => <Template {...args} />,
  args: {
    mask: '00.00.0000',
    placeholder: 'дд.мм.рррр',
  },
};

export const DateFieldWithError: Story = {
  render: args => <Template {...args} />,
  args: {
    mask: '00.00.0000',
    placeholder: 'дд.мм.рррр',
    error: 'Некоректна дата',
  },
};

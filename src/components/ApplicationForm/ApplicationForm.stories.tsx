import type { Meta, StoryObj } from '@storybook/react';

import ApplicationForm from './ApplicationForm';

const meta: Meta<typeof ApplicationForm> = {
  title: 'ApplicationForm',
  component: ApplicationForm,
};

export default meta;

type Story = StoryObj<typeof ApplicationForm>;

export const Default: Story = {
  render: () => <ApplicationForm />,
};

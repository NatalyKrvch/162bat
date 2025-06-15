import { Meta, StoryObj } from '@storybook/nextjs';

import Container from './Container';

export default {
  component: Container,
  title: 'Container',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <Container>
      <div className="bg:color-bg-secondary text-color-text-primary w-full border p-4">
        This is some content inside the Container
      </div>
    </Container>
  ),
};

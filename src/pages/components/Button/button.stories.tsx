import type { Meta, StoryObj } from '@storybook/react';

import Button from './buttton';

const meta = {
    title: 'Common/Button',
    component: Button,
  } satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof Button>

export const HelloButton: Story = {
  args: {
    children: 'Hello World',
  },
};

export const ClickButton: Story = {
    args: {
      children: 'click',
    },
  };
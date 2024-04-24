import type { Meta, StoryObj } from '@storybook/web-components';
import { Button } from '../src/components/button/Button';
const meta: Meta = {
  component: 'demo-button',
  render: () => Button(),
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
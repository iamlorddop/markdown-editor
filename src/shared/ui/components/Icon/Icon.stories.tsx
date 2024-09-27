import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'shared/Icon',
  component: Icon,
  tags: ['autodocs'],

  argTypes: {
    size: {
      table: {
        category: 'IconProps',
        type: { summary: '"l" | "m" | "s" | "xs"' },
        defaultValue: { summary: 'm' }
      },
      description: 'Icon size.',
      control: 'select',
      options: ['l', 'm', 's', 'xs']
    },
    cls: {
      table: {
        category: 'IconProps',
        type: { summary: 'string' }
      },
      description: 'Icon\'s CSS-class.',
      control: 'text'
    }
  },

  args: {
    cls: 'iconPen'
  }
}

export default meta;
type Story = StoryObj<typeof Icon>;

export const IconDefault: Story = {};

import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],

  argTypes: {
    text: {
      table: {
        category: 'ButtonProps',
        type: { summary: 'string' }
      },
      description: 'Button value.',
      control: 'text'
    },
    buttonType: {
      table: {
        category: 'ButtonProps',
        type: { summary: '"primary" | "light" | "primaryInverse" | "lightInverse"' },
        defaultValue: { summary: 'primary' }
      },
      description: 'Button type.',
      control: 'select',
      options: ['primary', 'light', 'primaryInverse', 'lightInverse']
    },
    size: {
      table: {
        category: 'ButtonProps',
        type: { summary: '"l" | "m" | "s"' },
        defaultValue: { summary: 'm' }
      },
      description: 'Button size.',
      control: 'select',
      options: ['l', 'm', 's']
    },
    cls: {
      table: {
        category: 'ButtonProps',
        type: { summary: 'string' }
      },
      description: 'Additional CSS-classes.',
      control: 'text'
    },
    iconCls: {
      table: {
        category: 'ButtonProps',
        type: { summary: 'string' }
      },
      description: 'Icon\'s CSS-class.',
      control: 'text'
    }
  },

  args: {
    text: 'Label'
  }
}

export default meta;
type Story = StoryObj<typeof Button>;

/** Button, type "Primary", size "M" */
export const ButtonPrimarySizeM: Story = {};

/** Button, type "Primary", size "L" */
export const ButtonPrimarySizeL: Story = {
  args: {
    size: 'l'
  }
};

/** Button, type "Primary", size "S" */
export const ButtonPrimarySizeS: Story = {
  args: {
    size: 's'
  }
};

/** Button, type "Primary", size "M", with icon */
export const ButtonPrimarySizeMWithIcon: Story = {
  args: {
    iconCls: 'iconPen'
  }
};

/** Button, type "Primary", size "L", with icon */
export const ButtonPrimarySizeLWithIcon: Story = {
  args: {
    ...ButtonPrimarySizeMWithIcon.args,
    size: 'l'
  }
};

/** Button, type "Primary", size "S", with icon */
export const ButtonPrimarySizeSWithIcon: Story = {
  args: {
    ...ButtonPrimarySizeMWithIcon.args,
    size: 's'
  }
};

/** Button, type "Light", size "M" */
export const ButtonLightSizeM: Story = {
  args: {
    buttonType: 'light'
  }
};

/** Button, type "Light", size "L" */
export const ButtonLightSizeL: Story = {
  args: {
    ...ButtonLightSizeM.args,
    size: 'l'
  }
};

/** Button, type "Light", size "S" */
export const ButtonLightSizeS: Story = {
  args: {
    ...ButtonLightSizeM.args,
    size: 's'
  }
};

/** Button, type "Light", size "M", with icon */
export const ButtonLightSizeMWithIcon: Story = {
  args: {
    iconCls: 'iconPen',
    buttonType: 'light'
  }
};

/** Button, type "Light", size "L", with icon */
export const ButtonLightSizeLWithIcon: Story = {
  args: {
    ...ButtonLightSizeMWithIcon.args,
    size: 'l'
  }
};

/** Button, type "Light", size "S", with icon */
export const ButtonLightSizeSWithIcon: Story = {
  args: {
    ...ButtonLightSizeMWithIcon.args,
    size: 's'
  }
};

/** Button, type "PrimaryInverse", size "M" */
export const ButtonPrimaryInverseSizeM: Story = {
  args: {
    buttonType: 'primaryInverse'
  }
};

/** Button, type "PrimaryInverse", size "L" */
export const ButtonPrimaryInverseSizeL: Story = {
  args: {
    ...ButtonPrimaryInverseSizeM.args,
    size: 'l'
  }
};

/** Button, type "PrimaryInverse", size "S" */
export const ButtonPrimaryInverseSizeS: Story = {
  args: {
    ...ButtonPrimaryInverseSizeM.args,
    size: 's'
  }
};

/** Button, type "PrimaryInverse", size "M", with icon */
export const ButtonPrimaryInverseSizeMWithIcon: Story = {
  args: {
    iconCls: 'iconPen',
    buttonType: 'primaryInverse'
  }
};

/** Button, type "PrimaryInverse", size "L", with icon */
export const ButtonPrimaryInverseSizeLWithIcon: Story = {
  args: {
    ...ButtonPrimaryInverseSizeMWithIcon.args,
    size: 'l'
  }
};

/** Button, type "PrimaryInverse", size "S", with icon */
export const ButtonPrimaryInverseSizeSWithIcon: Story = {
  args: {
    ...ButtonPrimaryInverseSizeMWithIcon.args,
    size: 's'
  }
};

/** Button, type "LightInverse", size "M" */
export const ButtonLightInverseSizeM: Story = {
  args: {
    buttonType: 'lightInverse'
  }
};

/** Button, type "LightInverse", size "L" */
export const ButtonLightInverseSizeL: Story = {
  args: {
    ...ButtonLightInverseSizeM.args,
    size: 'l'
  }
};

/** Button, type "LightInverse", size "S" */
export const ButtonLightInverseSizeS: Story = {
  args: {
    ...ButtonLightInverseSizeM.args,
    size: 's'
  }
};

/** Button, type "LightInverse", size "M", with icon */
export const ButtonLightInverseSizeMWithIcon: Story = {
  args: {
    iconCls: 'iconPen',
    buttonType: 'lightInverse'
  }
};

/** Button, type "LightInverse", size "L", with icon */
export const ButtonLightInverseSizeLWithIcon: Story = {
  args: {
    ...ButtonLightInverseSizeMWithIcon.args,
    size: 'l'
  }
};

/** Button, type "LightInverse", size "S", with icon */
export const ButtonLightInverseSizeSWithIcon: Story = {
  args: {
    ...ButtonLightInverseSizeMWithIcon.args,
    size: 's'
  }
};

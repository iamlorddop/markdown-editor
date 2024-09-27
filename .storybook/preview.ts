import type { Preview } from '@storybook/react';

import './global.css';
import '@/assets/fonts.css';
import '@/app/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

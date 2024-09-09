import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('Правильно рендерится главная страница', async () => {
  it('Должна правильно отрендериться страница', async () => {
    render(<App />);
    const h1 = screen.queryByText('Hello');

    expect(h1).toBeInTheDocument();
  });
});

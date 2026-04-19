import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemePortrait from '../../Template/ThemePortrait';

describe('ThemePortrait', () => {
  it('renders me.jpg as the portrait image', () => {
    render(<ThemePortrait width={160} height={160} />);

    const portrait = screen.getByRole('img', { name: 'Liang Tang' });
    expect(portrait).toHaveAttribute('alt', 'Liang Tang');
    expect(portrait).toHaveAttribute('width', '160');
    expect(portrait).toHaveAttribute('height', '160');
    expect(portrait).toHaveAttribute(
      'src',
      expect.stringContaining('/images/me.jpg'),
    );
  });

  it('renders correctly when priority is enabled', () => {
    render(<ThemePortrait width={80} height={80} priority />);

    const portrait = screen.getByRole('img', { name: 'Liang Tang' });
    expect(portrait).toHaveAttribute(
      'src',
      expect.stringContaining('/images/me.jpg'),
    );
  });
});

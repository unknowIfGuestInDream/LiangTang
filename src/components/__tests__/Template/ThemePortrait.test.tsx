import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemePortrait from '../../Template/ThemePortrait';

describe('ThemePortrait', () => {
  it('renders me.jpg as the portrait image', () => {
    render(<ThemePortrait width={160} height={160} />);

    const portrait = screen.getByRole('img', { name: 'Liang Tang' });
    expect(portrait).toHaveAttribute('src', expect.stringContaining('/me.jpg'));
  });
});

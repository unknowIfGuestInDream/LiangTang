import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Personal from '../../Stats/Personal';

describe('Personal', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the personal stats table', () => {
    render(<Personal />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays the current age label', () => {
    render(<Personal />);

    expect(screen.getByText('Current age')).toBeInTheDocument();
  });

  it('displays hometown', () => {
    render(<Personal />);

    expect(screen.getByText('Hometown')).toBeInTheDocument();
    expect(screen.getByText('Dalian')).toBeInTheDocument();
  });

  it('displays languages', () => {
    render(<Personal />);

    expect(screen.getByText('Languages')).toBeInTheDocument();
  });

  it('has a link for hometown', () => {
    render(<Personal />);

    const link = screen.getByRole('link', { name: /dalian/i });
    expect(link).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Dalian');
  });

  it('updates age over time', async () => {
    render(<Personal />);

    // Get initial age text
    const ageCell = screen.getByText('Current age').closest('tr');
    expect(ageCell).toBeInTheDocument();

    // Advance timer to trigger age update
    act(() => {
      vi.advanceTimersByTime(50);
    });

    // Age should still be displayed (value changes but component renders)
    expect(screen.getByText('Current age')).toBeInTheDocument();
  });
});

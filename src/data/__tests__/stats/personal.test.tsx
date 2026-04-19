import { act, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import data from '../../stats/personal';

describe('personal stats data', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('exports an array of stats', () => {
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  it('each stat has required properties', () => {
    for (const stat of data) {
      expect(stat).toHaveProperty('key');
      expect(stat).toHaveProperty('label');
      expect(typeof stat.label).toBe('string');
    }
  });

  it('has an age stat with a React component', () => {
    const ageStat = data.find((s) => s.key === 'age');

    expect(ageStat).toBeDefined();
    expect(ageStat!.label).toBe('Current age');
    // Age value is a React element
    expect(ageStat!.value).toBeDefined();
  });

  it('has a hometown stat', () => {
    const hometownStat = data.find((s) => s.key === 'hometown');

    expect(hometownStat).toBeDefined();
    expect(hometownStat!.label).toBe('Hometown');
    expect(hometownStat!.value).toBe('Dalian');
    expect(hometownStat!.link).toContain('wikipedia.org');
  });

  it('has a languages stat', () => {
    const languagesStat = data.find((s) => s.key === 'languages');

    expect(languagesStat).toBeDefined();
    expect(languagesStat!.label).toBe('Languages');
    expect(typeof languagesStat!.value).toBe('string');
  });

  it('Age component renders and updates', () => {
    const ageStat = data.find((s) => s.key === 'age');
    const AgeComponent = () => <>{ageStat!.value}</>;

    render(<AgeComponent />);

    // Advance timer to trigger age calculation
    act(() => {
      vi.advanceTimersByTime(50);
    });

    // The age should be a number with decimal places
    const textContent = document.body.textContent || '';
    expect(textContent).toMatch(/\d+\.\d+/);
  });
});

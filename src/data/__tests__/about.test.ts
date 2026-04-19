import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('Dalian');
    expect(aboutMarkdown).toContain('Java');
  });

  it('contains the currently section', () => {
    expect(aboutMarkdown).toContain('# Currently');
    expect(aboutMarkdown).toContain('Ipdchina');
  });

  it('contains the likes section', () => {
    expect(aboutMarkdown).toContain('# I Like');
  });

  it('contains the dreams section', () => {
    expect(aboutMarkdown).toContain('# I Dream Of');
  });

  it('contains the other sites section', () => {
    expect(aboutMarkdown).toContain('# My Other Sites');
    expect(aboutMarkdown).toContain('tlcsdm.com');
  });

  it('contains valid markdown links', () => {
    // Check for markdown link format [text](url)
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(0);
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThanOrEqual(5);
  });
});

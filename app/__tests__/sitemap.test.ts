import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('uses trailing slashes for exported page routes', () => {
    const entries = sitemap();

    expect(entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: `${SITE_URL}/about/` }),
        expect.objectContaining({ url: `${SITE_URL}/resume/` }),
        expect.objectContaining({ url: `${SITE_URL}/projects/` }),
        expect.objectContaining({ url: `${SITE_URL}/stats/` }),
        expect.objectContaining({ url: `${SITE_URL}/contact/` }),
      ]),
    );
  });

  it('includes the homepage with priority 1', () => {
    const entries = sitemap();
    const home = entries.find((entry) => entry.url === SITE_URL);

    expect(home).toBeDefined();
    expect(home?.priority).toBe(1);
  });
});

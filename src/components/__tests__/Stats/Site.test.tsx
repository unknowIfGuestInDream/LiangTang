import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock the fetch function
const mockGitHubData = {
  stargazers_count: 150,
  subscribers_count: 15,
  forks: 75,
  open_issues_count: 3,
  pushed_at: '2024-06-01T00:00:00Z',
};

// Must mock before importing the component
vi.stubGlobal(
  'fetch',
  vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockGitHubData),
    }),
  ),
);

// Import after mocking
import Site from '../../Stats/Site';

describe('Site', () => {
  beforeEach(() => {
    vi.mocked(global.fetch).mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the site stats table', async () => {
    const Component = await Site();
    render(Component);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays static labels', async () => {
    const Component = await Site();
    render(Component);

    expect(screen.getByText('Last updated at')).toBeInTheDocument();
  });

  it('fetches GitHub data at build time', async () => {
    await Site();

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/unknowIfGuestInDream/LiangTang',
      expect.objectContaining({
        headers: expect.objectContaining({
          Accept: 'application/vnd.github.v3+json',
        }),
      }),
    );
  });

  it('has a link for the remaining GitHub-sourced stat', async () => {
    const Component = await Site();
    render(Component);

    const links = document.querySelectorAll(
      'a[href="https://github.com/unknowIfGuestInDream/LiangTang/commits"]',
    );
    expect(links.length).toBeGreaterThan(0);
  });

  it('only displays the last updated stat', async () => {
    const Component = await Site();
    render(Component);

    expect(screen.getByText('Last updated at')).toBeInTheDocument();
    expect(screen.getAllByText('Last updated at')).toHaveLength(1);
  });

  it('uses fallback data when fetch fails', async () => {
    vi.mocked(global.fetch).mockRejectedValueOnce(new Error('Network error'));

    const Component = await Site();
    render(Component);

    // Should still render with fallback data
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});

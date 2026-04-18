import { describe, expect, test } from 'vitest';
import data from '../data/contact';
import routes from '../data/routes';

describe('Routes data', () => {
  test('has index route', () => {
    const indexRoute = routes.find((r) => r.index);
    expect(indexRoute).toBeDefined();
    expect(indexRoute.path).toBe('/');
  });

  test('has all expected routes', () => {
    const paths = routes.map((r) => r.path);
    expect(paths).toContain('/about');
    expect(paths).toContain('/resume');
    expect(paths).toContain('/projects');
    expect(paths).toContain('/stats');
    expect(paths).toContain('/contact');
  });

  test('all routes have labels', () => {
    for (const route of routes) {
      expect(route.label).toBeDefined();
      expect(route.label.length).toBeGreaterThan(0);
    }
  });
});

describe('Contact data', () => {
  test('has contact entries', () => {
    expect(data.length).toBeGreaterThan(0);
  });

  test('all entries have required fields', () => {
    for (const entry of data) {
      expect(entry.label).toBeDefined();
      expect(entry.link).toBeDefined();
      expect(entry.icon).toBeDefined();
    }
  });
});

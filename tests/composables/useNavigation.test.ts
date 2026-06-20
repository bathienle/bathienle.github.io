import { describe, expect, it } from 'vitest';

import { useNavigation } from '@/composables/useNavigation';

describe('useNavigation', () => {
  it('should return an array of navigation links', () => {
    const { links } = useNavigation();

    expect(Array.isArray(links)).toBe(true);
    expect(links.length).toBeGreaterThan(0);
  });

  it('should include all expected section links', () => {
    const { links } = useNavigation();
    const hrefs = links.map(link => link.href);

    expect(hrefs).toContain('#about');
    expect(hrefs).toContain('#stack');
    expect(hrefs).toContain('#experience');
    expect(hrefs).toContain('#education');
    expect(hrefs).toContain('#project');
  });

  it('should have a non-empty href and label for each link', () => {
    const { links } = useNavigation();

    links.forEach(link => {
      expect(link.href).toBeTruthy();
      expect(link.label).toBeTruthy();
    });
  });
});

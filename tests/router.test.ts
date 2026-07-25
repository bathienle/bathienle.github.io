import { describe, it, expect } from 'vitest';

import { router } from '@/router';

describe('router', () => {
  describe('Route Resolution', () => {
    it('should resolve the root path to the home view', () => {
      const route = router.resolve('/');

      expect(route.name).toBe('home');
      expect(route.meta.bare).toBeUndefined();
    });

    it('should resolve an unknown path to the bare not found view', () => {
      const route = router.resolve('/does-not-exist');

      expect(route.name).toBe('not-found');
      expect(route.meta.bare).toBe(true);
    });
  });
});

import { describe, it, expect } from 'vitest';

import type { RouteLocationNormalizedLoaded, RouterOptions } from 'vue-router';

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

  describe('Scroll Behavior', () => {
    type ScrollBehavior = NonNullable<RouterOptions['scrollBehavior']>;
    type SavedPosition = Parameters<ScrollBehavior>[2];

    const scrollBehavior = router.options.scrollBehavior as ScrollBehavior;
    const asRoute = (hash: string) => ({ hash }) as unknown as RouteLocationNormalizedLoaded;

    const scrollFor = (hash: string, savedPosition: SavedPosition = null) =>
      scrollBehavior(asRoute(hash), asRoute(''), savedPosition);

    it('should scroll to the target element when the route has a hash', () => {
      expect(scrollFor('#project')).toEqual({ el: '#project', behavior: 'smooth' });
    });

    it('should scroll to the top when the route has no hash', () => {
      expect(scrollFor('')).toEqual({ top: 0 });
    });

    it('should restore the saved position when navigating back', () => {
      expect(scrollFor('', { left: 0, top: 420 })).toEqual({ left: 0, top: 420 });
    });
  });
});

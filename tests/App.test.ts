import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import App from '@/App.vue';
import { router } from '@/router';

describe('App.vue', () => {
  const mountApp = async (path: string) => {
    await router.push(path);
    await router.isReady();

    return shallowMount(App, {
      global: {
        plugins: [router],
      },
    });
  };

  describe('Component Rendering', () => {
    it('should render the layout shell around the current view', async () => {
      const wrapper = await mountApp('/');

      ['AppNavbar', 'RouterView', 'AppFooter'].forEach(componentName => {
        expect(wrapper.findComponent({ name: componentName }).exists()).toBe(true);
      });
    });

    it('should hide the navbar and footer on a bare route', async () => {
      const wrapper = await mountApp('/does-not-exist');

      expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
      expect(wrapper.findComponent({ name: 'AppNavbar' }).exists()).toBe(false);
      expect(wrapper.findComponent({ name: 'AppFooter' }).exists()).toBe(false);
    });
  });
});

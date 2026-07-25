import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import App from '@/App.vue';

describe('App.vue', () => {
  const components = [
    'AppNavbar',
    'HomeView',
    'AppFooter',
  ];

  const wrapper = shallowMount(App);

  describe('Component Rendering', () => {
    it('should render the layout shell and the current view', () => {
      components.forEach(componentName => {
        expect(wrapper.findComponent({ name: componentName }).exists()).toBe(true);
      });
    });
  });
});

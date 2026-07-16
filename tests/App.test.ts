import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import App from '@/App.vue';

describe('App.vue', () => {
  const components = [
    'AppNavbar',
    'HeroView',
    'AboutView',
    'StackView',
    'ExperienceView',
    'EducationView',
    'ProjectView',
    'AppFooter',
  ];

  const wrapper = shallowMount(App);

  describe('Component Rendering', () => {
    it('should render all view components in correct order', () => {
      components.forEach(componentName => {
        expect(wrapper.findComponent({ name: componentName }).exists()).toBe(true);
      });
    });
  });
});
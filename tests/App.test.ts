import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';

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

  const mockContent = {
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      tagline: 'Full Stack Developer',
    },
    about: {
      description: 'Passionate developer',
    },
    experiences: [],
    educations: [],
    projects: [],
    stack: [],
  };

  const fetchMock = vi.fn().mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockContent),
  });

  vi.stubGlobal('fetch', fetchMock);

  const wrapper = shallowMount(App);

  describe('Component Rendering', () => {
    it('should render all view components in correct order', () => {
      components.forEach(componentName => {
        expect(wrapper.findComponent({ name: componentName }).exists()).toBe(true);
      });
    });
  });
});
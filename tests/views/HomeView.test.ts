import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import HomeView from '@/views/HomeView.vue';

describe('HomeView.vue', () => {
  const sections = [
    'HeroSection',
    'AboutSection',
    'StackSection',
    'ExperienceSection',
    'EducationSection',
    'ProjectSection',
  ];

  const wrapper = shallowMount(HomeView);

  describe('Component Rendering', () => {
    it('should render all sections', () => {
      sections.forEach(sectionName => {
        expect(wrapper.findComponent({ name: sectionName }).exists()).toBe(true);
      });
    });
  });
});

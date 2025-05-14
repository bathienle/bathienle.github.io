import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';

import type { Content } from '@/types/content.d.ts';
import AppFooter from '@/components/AppFooter.vue';

describe('AppFooter.vue', () => {
  it('should render the social links correctly', () => {
    const mockContent = ref<Content>({
      profile: {
        firstName: 'John',
        lastName: 'Doe',
        website: 'https://example.com',
        socials: [
          { key: 'twitter', url: 'https://twitter.com/example' },
          { key: 'github', url: 'https://github.com/example' },
        ],
      },
      about: {
        description: 'A passionate developer',
        interests: ['coding'],
      },
      stacks: [],
      experiences: [],
      educations: [],
      projects: [],
    });

    const wrapper = shallowMount(AppFooter, {
      global: {
        provide: {
          content: mockContent,
        },
      },
    });

    const links = wrapper.findAll('a');
    expect(links.length).toBe(2);

    expect(links[0].attributes('href')).toBe('https://twitter.com/example');
    expect(links[0].find('i').classes()).toContain('fa-twitter');

    expect(links[1].attributes('href')).toBe('https://github.com/example');
    expect(links[1].find('i').classes()).toContain('fa-github');
  });
});

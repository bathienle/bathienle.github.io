import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';

import type { Content } from '@/types/content.ts';
import AppFooter from '@/components/AppFooter.vue';

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
  projects: [
    { title: 'Project One', description: '', image: '', startDate: '', endDate: '', tags: [], link: 'https://example.com/one' },
    { title: 'Project Two', description: '', image: '', startDate: '', endDate: '', tags: [], link: 'https://example.com/two' },
  ],
});

describe('AppFooter.vue', () => {
  const mountFooter = () => {
    return shallowMount(AppFooter, {
      global: {
        provide: {
          content: mockContent,
        },
      },
    });
  };

  it('should render the full name', () => {
    const wrapper = mountFooter();

    expect(wrapper.text()).toContain(mockContent.value.profile.firstName);
    expect(wrapper.text()).toContain(mockContent.value.profile.lastName);
  });

  it('should render the social links correctly', () => {
    const wrapper = mountFooter();

    const links = wrapper.findAll('a');

    expect(links.some(link => link.attributes('href') === 'https://twitter.com/example')).toBe(true);
    expect(links.some(link => link.attributes('href') === 'https://github.com/example')).toBe(true);
  });
});

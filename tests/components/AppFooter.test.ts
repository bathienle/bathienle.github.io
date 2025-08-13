import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ref } from 'vue';

import type { VueWrapper } from '@vue/test-utils';
import type { ComponentPublicInstance } from 'vue';

import AppFooter from '@/components/AppFooter.vue';

describe('AppFooter.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  const mockContent = {
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      tagline: 'Welcome to my website!',
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
  };

  beforeEach(() => {
    wrapper = shallowMount(AppFooter, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });
  });

  afterEach(() => {
    wrapper?.unmount();
  });

  it('should render the full name', () => {
    expect(wrapper.text()).toContain(mockContent.profile.firstName);
    expect(wrapper.text()).toContain(mockContent.profile.lastName);
  });

  it('should render the social links correctly', () => {
    const links = wrapper.findAll('a');

    expect(links.some(link => link.attributes('href') === 'https://twitter.com/example')).toBe(true);
    expect(links.some(link => link.attributes('href') === 'https://github.com/example')).toBe(true);
  });

  it('should handle null/undefined firstName', () => {
    const mockContent = {
      profile: {
        firstName: null,
        lastName: 'Johnson',
        tagline: 'Manager',
      },
    };

    wrapper = shallowMount(AppFooter, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });

    expect(wrapper.find('p.flex.justify-center.my-10').text()).toContain(mockContent.profile.lastName);
  });

  it('should handle null/undefined lastName', () => {
    const mockContent = {
      profile: {
        firstName: 'Bob',
        lastName: undefined,
        tagline: 'Analyst',
      },
    };

    wrapper = shallowMount(AppFooter, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });

    expect(wrapper.find('p.flex.justify-center.my-10').text()).toContain(mockContent.profile.firstName);
  });
});

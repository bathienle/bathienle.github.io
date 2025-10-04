import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { ref } from 'vue';

import type { VueWrapper } from '@vue/test-utils';
import type { ComponentPublicInstance } from 'vue';

import HeroView from '@/views/HeroView.vue';

vi.stubGlobal('innerHeight', 800);

describe('HeroView.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  const mockContent = {
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      tagline: 'This is a tagline about the website.',
    },
  };

  beforeEach(() => {
    wrapper = shallowMount(HeroView, {
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

  it('should render the dynamic text correctly', () => {
    expect(wrapper.text()).toContain(mockContent.profile.firstName);
    expect(wrapper.text()).toContain(mockContent.profile.lastName.toUpperCase());
    expect(wrapper.text()).toContain(mockContent.profile.tagline);
  });

  it('should scroll down when clicking on arrow down icon', async () => {
    const scrollBySpy = vi.spyOn(window, 'scrollBy').mockImplementation(() => {});

    const button = wrapper.find('.animate-bounce');
    await button.trigger('click');

    expect(scrollBySpy).toHaveBeenCalledExactlyOnceWith({
      top: 800,
      behavior: 'smooth',
    });
  });

  it('should handle null/undefined firstName', () => {
    const mockContent = {
      profile: {
        firstName: null,
        lastName: 'Johnson',
        tagline: 'Manager',
      },
    };

    wrapper = shallowMount(HeroView, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });

    expect(wrapper.find('h1').text()).toBe(mockContent.profile.lastName.toUpperCase());
  });

  it('should handle null/undefined lastName', () => {
    const mockContent = {
      profile: {
        firstName: 'Bob',
        lastName: undefined,
        tagline: 'Analyst',
      },
    };

    wrapper = shallowMount(HeroView, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });

    expect(wrapper.find('h1').text()).toBe(mockContent.profile.firstName);
  });
});
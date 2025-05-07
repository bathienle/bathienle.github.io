import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';

import AppNavbar from '@/components/AppNavbar.vue';

const mockContent = ref({
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    website: 'https://example.com',
  },
});

describe('AppNavbar.vue', () => {
  it('should render profile name and links correctly', () => {
    const wrapper = shallowMount(AppNavbar, {
      global: {
        provide: {
          content: mockContent,
        },
      },
    });

    expect(wrapper.text()).toContain('John');
    expect(wrapper.text()).toContain('Doe');

    const link = wrapper.find('a[href="https://example.com"]');
    expect(link.exists()).toBe(true);
  });

  it('should render all navigation links', () => {
    const wrapper = shallowMount(AppNavbar, {
      global: {
        provide: {
          content: mockContent,
        },
      },
    });

    const navLinks = ['#about', '#experience', '#education', '#project'];
    navLinks.forEach((id) => {
      const link = wrapper.find(`a[href="${id}"]`);
      expect(link.exists()).toBe(true);
    });
  });

  it('should not render profile when content is null', () => {
    const wrapper = shallowMount(AppNavbar, {
      global: {
        provide: {
          content: ref(null),
        },
      },
    });

    expect(wrapper.text()).not.toContain('John');
    expect(wrapper.text()).not.toContain('Doe');
  });
});

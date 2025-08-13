import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ref } from 'vue';

import type { VueWrapper } from '@vue/test-utils';
import type { ComponentPublicInstance } from 'vue';

import AppNavbar from '@/components/AppNavbar.vue';

describe('AppNavbar.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  const mockContent = ref({
    profile: {
      firstName: 'John',
      lastName: 'Doe',
    },
  });

  beforeEach(() => {
    wrapper = shallowMount(AppNavbar, {
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

  it('should render profile name and links correctly', () => {
    expect(wrapper.text()).toContain('John');
    expect(wrapper.text()).toContain('Doe'.toUpperCase());

    const link = wrapper.find('a[href="/"]');
    expect(link.exists()).toBe(true);
  });

  it('should render all navigation links', () => {
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

  it('should toggle icon when menu button is clicked', async () => {
    const toggleButton = wrapper.find('button.md\\:hidden');

    const iconStub = toggleButton.find('anonymous-stub');
    expect(iconStub.exists()).toBe(true);
    expect(iconStub.attributes('icon')).toBe('fa:bars');

    await toggleButton.trigger('click');

    const iconStubAfterClick = toggleButton.find('anonymous-stub');
    expect(iconStubAfterClick.attributes('icon')).toBe('fa:times');

    await toggleButton.trigger('click');

    const iconStubAfterSecondClick = toggleButton.find('anonymous-stub');
    expect(iconStubAfterSecondClick.attributes('icon')).toBe('fa:bars');
  });
});

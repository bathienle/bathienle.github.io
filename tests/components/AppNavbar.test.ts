import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
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
      socials: [
        { key: 'github', url: 'https://github.com/example' },
        { key: 'linkedin', url: 'https://linkedin.com/in/example' },
      ],
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

  it('should render profile initials and links correctly', () => {
    expect(wrapper.text()).toContain('JD');

    const link = wrapper.find('a[href="/"]');
    expect(link.exists()).toBe(true);
  });

  it('should render all navigation links', () => {
    const navLinks = ['#about', '#stack', '#experience', '#education', '#project'];
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

  it('should render social links in the desktop navbar', () => {
    const socialLinks = wrapper.findAll('a[target="_blank"]');
    expect(socialLinks).toHaveLength(mockContent.value.profile.socials.length);
    expect(socialLinks[0]!.attributes('href')).toBe(mockContent.value.profile.socials[0]!.url);
    expect(socialLinks[1]!.attributes('href')).toBe(mockContent.value.profile.socials[1]!.url);
  });

  it('should render social links in the mobile menu', async () => {
    const toggleButton = wrapper.find('button.md\\:hidden');
    await toggleButton.trigger('click');

    const socialLinks = wrapper.findAll('a[target="_blank"]');
    expect(socialLinks).toHaveLength(mockContent.value.profile.socials.length * 2);
  });

  it('should apply scrolled styles when page is scrolled', async () => {
    vi.stubGlobal('scrollY', 100);
    window.dispatchEvent(new Event('scroll'));
    await wrapper.vm.$nextTick();

    expect(wrapper.find('header').classes()).toContain('bg-dominant/90');

    vi.unstubAllGlobals();
  });

  it('should toggle icon when menu button is clicked', async () => {
    const toggleButton = wrapper.find('button.md\\:hidden');

    const iconStub = toggleButton.find('anonymous-stub');
    expect(iconStub.exists()).toBe(true);
    expect(iconStub.attributes('icon')).toBe('mdi:menu');

    await toggleButton.trigger('click');

    const iconStubAfterClick = toggleButton.find('anonymous-stub');
    expect(iconStubAfterClick.attributes('icon')).toBe('mdi:close');

    await toggleButton.trigger('click');

    const iconStubAfterSecondClick = toggleButton.find('anonymous-stub');
    expect(iconStubAfterSecondClick.attributes('icon')).toBe('mdi:menu');
  });
});

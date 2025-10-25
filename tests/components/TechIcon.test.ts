import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { Icon } from '@iconify/vue';

import TechIcon from '@/components/TechIcon.vue';
import type { Tech } from '@/types/content.ts';

describe('TechIcon.vue', () => {
  const expectedTech: Tech = {
    key: 'vue',
    name: 'Vue.js',
    url: 'https://vuejs.org/',
  };

  const createWrapper = () => {
    return shallowMount(TechIcon, {
      props: { tech: expectedTech },
    });
  };

  it('should render the icon correctly', () => {
    const wrapper = createWrapper();
    const icon = wrapper.findComponent(Icon);

    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toBe(`logos:${expectedTech.key}`);
  });

  it('should render the link with correct href', () => {
    const wrapper = createWrapper();
    const a = wrapper.find('a');

    expect(a.exists()).toBe(true);
    expect(a.attributes('href')).toBe(expectedTech.url);
  });

  it('should render the tooltip span with tech name', () => {
    const wrapper = createWrapper();
    const span = wrapper.find('span');

    expect(span.exists()).toBe(true);
    expect(span.text()).toBe(expectedTech.name);
  });
});

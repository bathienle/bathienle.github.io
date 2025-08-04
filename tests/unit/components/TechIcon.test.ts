import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import TechIcon from '@/components/TechIcon.vue';

describe('TechIcon.vue', () => {
  const tech = {
    key: 'vue',
    name: 'Vue.js',
    url: 'https://vuejs.org/',
  };

  it('renders the image with correct src and alt', () => {
    const wrapper = shallowMount(TechIcon, {
      props: { tech },
    });
    const img = wrapper.find('img');

    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('/images/tech-stack-icons/vue.svg');
    expect(img.attributes('alt')).toBe('Vue.js');
  });

  it('renders the link with correct href', () => {
    const wrapper = shallowMount(TechIcon, {
      props: { tech },
    });
    const a = wrapper.find('a');

    expect(a.exists()).toBe(true);
    expect(a.attributes('href')).toBe('https://vuejs.org/');
  });

  it('renders the tooltip span with tech name', () => {
    const wrapper = shallowMount(TechIcon, {
      props: { tech },
    });
    const span = wrapper.find('span');

    expect(span.exists()).toBe(true);
    expect(span.text()).toBe('Vue.js');
  });
});

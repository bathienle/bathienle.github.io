import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import TagItem from '@/components/TagItem.vue';

describe('TagItem.vue', () => {
  it('should render the text correctly', () => {
    const wrapper = shallowMount(TagItem, {
      props: { text: 'Hello World' },
    });

    expect(wrapper.text()).toContain('Hello World');
  });

  it('should render an empty string without errors', () => {
    const wrapper = shallowMount(TagItem, {
      props: { text: '' },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toBe('');
  });

  it('should render special characters correctly', () => {
    const wrapper = shallowMount(TagItem, {
      props: { text: 'C++ & <Node.js>' },
    });

    expect(wrapper.text()).toContain('C++ & <Node.js>');
  });
});

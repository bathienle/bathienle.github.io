import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import TagItem from '@/components/TagItem.vue';

describe('TagItem.vue', () => {
  it('renders the text correctly', () => {
    const wrapper = shallowMount(TagItem, {
      props: { text: 'Hello World' },
    })

    expect(wrapper.text()).toContain('Hello World');
  });
});

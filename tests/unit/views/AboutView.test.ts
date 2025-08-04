import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';

import AboutView from '@/views/AboutView.vue';

describe('AboutView.vue', () => {
  const mockedDescription = 'This is a description about the app.';

  it('should render the description correctly', () => {
    const mockContent = {
      about: {
        description: mockedDescription,
      },
    };

    const wrapper = shallowMount(AboutView, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });

    expect(wrapper.text()).toContain('About');
    expect(wrapper.text()).toContain(mockedDescription);
  });

  it('should not render the description when about is null', () => {
    const wrapper = shallowMount(AboutView, {
      global: {
        provide: {
          content: ref(null),
        },
      },
    });

    expect(wrapper.text()).toContain('About');
    expect(wrapper.text()).not.toContain(mockedDescription);
  });
});
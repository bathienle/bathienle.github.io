import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';

import StackSection from '@/sections/StackSection.vue';

describe('StackSection.vue', () => {
  const mockedStacks = [
    {
      title: 'Frontend',
      items: [
        { key: 'vue', name: 'Vue' },
        { key: 'ts', name: 'TypeScript' },
        { key: 'tailwind', name: 'TailwindCSS' },
      ],
    },
  ];

  it('should render all provided tech stack icons', () => {
    const mockContent = {
      stacks: mockedStacks,
    };

    const wrapper = shallowMount(StackSection, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });

    expect(wrapper.text()).toContain('Stack');
    expect(wrapper.findAll('tech-icon-stub').length).toBe(mockedStacks[0]!.items.length);
  });

  it('should not render any icons if stacks is undefined', () => {
    const wrapper = shallowMount(StackSection, {
      global: {
        provide: {
          content: ref({}),
        },
      },
    });

    expect(wrapper.text()).toContain('Stack');
    expect(wrapper.findAll('tech-icon-stub').length).toBe(0);
  });
});

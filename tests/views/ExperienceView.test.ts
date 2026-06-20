import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, it, expect } from 'vitest';
import { ref } from 'vue';

import type { VueWrapper } from '@vue/test-utils';
import ExperienceView from '@/views/ExperienceView.vue';

describe('ExperienceView.vue', () => {
  const mockContent = ref({
    experiences: [
      {
        title: 'Junior Software Engineer',
        company: 'Company A',
        year: '2022-2024',
      },
      {
        title: 'Intern',
        company: 'Company B',
        year: '2018-2022',
      },
    ],
  });

  let wrapper: VueWrapper<InstanceType<typeof ExperienceView>>;

  beforeEach(() => {
    mockContent.value.experiences = [
      {
        title: 'Junior Software Engineer',
        company: 'Company A',
        year: '2022-2024',
      },
      {
        title: 'Intern',
        company: 'Company B',
        year: '2018-2022',
      },
    ];

    wrapper = shallowMount(ExperienceView, {
      global: {
        provide: {
          content: mockContent,
        },
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render ExperienceItem components for each experience', () => {
    const experiences = wrapper.findAllComponents({ name: 'ExperienceItem' });

    expect(experiences).toHaveLength(mockContent.value.experiences.length);
    expect(experiences[0]!.props('experience')).toEqual(mockContent.value.experiences[0]);
    expect(experiences[1]!.props('experience')).toEqual(mockContent.value.experiences[1]);
  });

  it('should render no ExperienceItem components when experiences is empty', async () => {
    mockContent.value.experiences = [];
    await wrapper.vm.$nextTick();

    expect(wrapper.findAllComponents({ name: 'ExperienceItem' })).toHaveLength(0);
  });

  it('should render no ExperienceItem components when content is null', () => {
    const emptyWrapper = shallowMount(ExperienceView, {
      global: {
        provide: {
          content: ref(null),
        },
      },
    });

    expect(emptyWrapper.findAllComponents({ name: 'ExperienceItem' })).toHaveLength(0);
  });
});

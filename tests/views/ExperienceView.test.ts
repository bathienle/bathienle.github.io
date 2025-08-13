import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';

import ExperienceView from '@/views/ExperienceView.vue';

describe('ExperienceView.vue', () => {
  const mockContent = {
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
  };

  const wrapper = shallowMount(ExperienceView, {
    global: {
      provide: {
        content: ref(mockContent),
      },
    },
  });

  it('should render ExperienceItem components for each experience', () => {
    const experiences = wrapper.findAllComponents({ name: 'ExperienceItem' });

    expect(experiences).toHaveLength(mockContent.experiences.length);
    expect(experiences[0].props('experience')).toEqual(mockContent.experiences[0]);
    expect(experiences[1].props('experience')).toEqual(mockContent.experiences[1]);
  });
});
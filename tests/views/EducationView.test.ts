import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, it, expect } from 'vitest';
import { ref } from 'vue';

import type { VueWrapper } from '@vue/test-utils';
import EducationView from '@/views/EducationView.vue';

describe('EducationView.vue', () => {
  const mockContent = ref({
    educations: [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'University of Technology',
        year: '2018-2022',
        description: 'Major in Software Engineering',
      },
      {
        degree: 'Master of Information Systems',
        institution: 'Tech Institute',
        year: '2022-2024',
        description: 'Specialization in Data Science',
      },
    ],
  });

  let wrapper: VueWrapper<InstanceType<typeof EducationView>>;

  beforeEach(() => {
    mockContent.value.educations = [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'University of Technology',
        year: '2018-2022',
        description: 'Major in Software Engineering',
      },
      {
        degree: 'Master of Information Systems',
        institution: 'Tech Institute',
        year: '2022-2024',
        description: 'Specialization in Data Science',
      },
    ];

    wrapper = shallowMount(EducationView, {
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

  it('should render EducationItem components for each education', () => {
    const educationItems = wrapper.findAllComponents({ name: 'EducationItem' });

    expect(educationItems).toHaveLength(mockContent.value.educations.length);
    expect(educationItems[0]!.props('education')).toEqual(mockContent.value.educations[0]);
    expect(educationItems[1]!.props('education')).toEqual(mockContent.value.educations[1]);
  });

  it('should render no EducationItem components when educations is empty', async () => {
    mockContent.value.educations = [];
    await wrapper.vm.$nextTick();

    expect(wrapper.findAllComponents({ name: 'EducationItem' })).toHaveLength(0);
  });

  it('should render no EducationItem components when content is null', () => {
    const emptyWrapper = shallowMount(EducationView, {
      global: {
        provide: {
          content: ref(null),
        },
      },
    });

    expect(emptyWrapper.findAllComponents({ name: 'EducationItem' })).toHaveLength(0);
  });
});

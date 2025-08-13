import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';

import EducationView from '@/views/EducationView.vue';

describe('EducationView.vue', () => {
  const mockContent = {
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
  };

  const wrapper = shallowMount(EducationView, {
    global: {
      provide: {
        content: ref(mockContent),
      },
    },
  });

  it('should render EducationItem components for each education', () => {
    const educationItems = wrapper.findAllComponents({ name: 'EducationItem' });

    expect(educationItems).toHaveLength(mockContent.educations.length);
    expect(educationItems[0].props('education')).toEqual(mockContent.educations[0]);
    expect(educationItems[1].props('education')).toEqual(mockContent.educations[1]);
  });
});
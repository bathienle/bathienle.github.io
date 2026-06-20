import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type { VueWrapper } from '@vue/test-utils';
import type { Education } from '@/types/content.ts';
import EducationItem from '@/components/EducationItem.vue';

describe('EducationItem.vue', () => {
  const mockEducation: Education = {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Technology',
    location: 'Sydney, Australia',
    startDate: 'Jan 2018',
    endDate: 'Dec 2022',
    icon: '/icons/uni.png',
    tags: ['Computer Science', 'Software Engineering'],
  };

  let wrapper: VueWrapper<InstanceType<typeof EducationItem>>;

  beforeEach(() => {
    wrapper = shallowMount(EducationItem, {
      props: { education: mockEducation },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render the degree', () => {
    expect(wrapper.text()).toContain(mockEducation.degree);
  });

  it('should render the institution', () => {
    expect(wrapper.text()).toContain(mockEducation.institution);
  });

  it('should render the start and end dates', () => {
    expect(wrapper.text()).toContain(mockEducation.startDate);
    expect(wrapper.text()).toContain(mockEducation.endDate);
  });

  it('should render the location', () => {
    expect(wrapper.text()).toContain(mockEducation.location);
  });

  it('should render the institution icon', () => {
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(mockEducation.icon);
    expect(img.attributes('alt')).toBe(mockEducation.institution);
  });

  it('should render a TagItem for each tag', () => {
    const tags = wrapper.findAllComponents({ name: 'TagItem' });
    expect(tags).toHaveLength(mockEducation.tags.length);
    expect(tags[0]!.props('text')).toBe(mockEducation.tags[0]);
    expect(tags[1]!.props('text')).toBe(mockEducation.tags[1]);
  });
});

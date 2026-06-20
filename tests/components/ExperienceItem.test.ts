import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type { VueWrapper } from '@vue/test-utils';
import type { Experience } from '@/types/content.ts';
import ExperienceItem from '@/components/ExperienceItem.vue';

describe('ExperienceItem.vue', () => {
  const mockExperience: Experience = {
    title: 'Software Engineer',
    company: 'Acme Corp',
    location: 'Paris, France',
    startDate: 'Jan 2022',
    endDate: 'Dec 2024',
    icon: '/icons/acme.png',
    description: 'Built and maintained web applications.',
    stack: [
      { key: 'vue', name: 'Vue.js' },
      { key: 'typescript', name: 'TypeScript' },
    ],
  };

  let wrapper: VueWrapper<InstanceType<typeof ExperienceItem>>;

  beforeEach(() => {
    wrapper = shallowMount(ExperienceItem, {
      props: { experience: mockExperience },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render the job title', () => {
    expect(wrapper.text()).toContain(mockExperience.title);
  });

  it('should render the company name', () => {
    expect(wrapper.text()).toContain(mockExperience.company);
  });

  it('should render the start and end dates', () => {
    expect(wrapper.text()).toContain(mockExperience.startDate);
    expect(wrapper.text()).toContain(mockExperience.endDate);
  });

  it('should render the location', () => {
    expect(wrapper.text()).toContain(mockExperience.location);
  });

  it('should render the description', () => {
    expect(wrapper.text()).toContain(mockExperience.description);
  });

  it('should render the company icon', () => {
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(mockExperience.icon);
    expect(img.attributes('alt')).toBe(mockExperience.company);
  });

  it('should render a TechIcon for each tech in the stack', () => {
    const techIcons = wrapper.findAllComponents({ name: 'TechIcon' });
    expect(techIcons).toHaveLength(mockExperience.stack.length);
    expect(techIcons[0]!.props('tech')).toEqual(mockExperience.stack[0]);
    expect(techIcons[1]!.props('tech')).toEqual(mockExperience.stack[1]);
  });
});

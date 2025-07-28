import { shallowMount, VueWrapper } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type { Project } from '@/types/content.ts';
import ProjectCard from '@/components/ProjectCard.vue';

describe('ProjectCard.vue', () => {
  const mockProject: Project = {
    title: 'Test Project',
    link: 'https://github.com/bathienle/bathienle.github.io',
    image: 'https://avatars.githubusercontent.com/u/57636476?v=4',
    startDate: 'Jan 2021',
    endDate: 'Dec 2021',
    description: 'This is a test project.',
    tags: ['Vue', 'TypeScript'],
  };
  let wrapper: VueWrapper<InstanceType<typeof ProjectCard>>;

  beforeEach(() => {
    wrapper = shallowMount(ProjectCard, {
      props: { project: mockProject },
      global: {
        stubs: {
          TagItem: true,
        },
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render project data correctly', () => {
    expect(wrapper.text()).toContain(mockProject.title);
    expect(wrapper.text()).toContain(mockProject.startDate);
    expect(wrapper.text()).toContain(mockProject.endDate);
    expect(wrapper.text()).toContain(mockProject.description);
    expect(wrapper.find('img').attributes('src')).toBe(mockProject.image);
    expect(wrapper.find('a').attributes('href')).toBe(mockProject.link);
  });

  it('should render correct number of tags', () => {
    const tags = wrapper.findAllComponents({ name: 'TagItem' });
    expect(tags.length).toBe(mockProject.tags.length);
  });
});

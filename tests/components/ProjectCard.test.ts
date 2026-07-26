import { shallowMount, RouterLinkStub, VueWrapper } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type { Project } from '@/types/content.ts';
import ProjectCard from '@/components/ProjectCard.vue';

describe('ProjectCard.vue', () => {
  const mockProject: Project = {
    slug: 'test-project',
    title: 'Test Project',
    link: 'https://bathienle.github.io/',
    repository: 'https://github.com/bathienle/bathienle.github.io',
    image: 'https://avatars.githubusercontent.com/u/57636476?v=4',
    startDate: 'Jan 2021',
    endDate: 'Dec 2021',
    status: 'Completed',
    description: 'This is a test project.',
    tags: ['Vue', 'TypeScript'],
    stack: [{ 'key': 'typescript', 'name': 'TypeScript' }],
  };
  let wrapper: VueWrapper<InstanceType<typeof ProjectCard>>;

  beforeEach(() => {
    wrapper = shallowMount(ProjectCard, {
      props: { project: mockProject },
      global: {
        stubs: {
          TechIcon: true,
          RouterLink: RouterLinkStub,
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

    const links = wrapper.findAll('a[href]');
    expect(links[0]!.attributes('href')).toBe(mockProject.repository);
    expect(links[1]!.attributes('href')).toBe(mockProject.link);
  });

  it('should render correct number of tech', () => {
    const tech = wrapper.findAllComponents({ name: 'TechIcon' });
    expect(tech.length).toBe(mockProject.stack.length);
  });

  it('should not render the live demo link when project link is not provided', () => {
    const w = shallowMount(ProjectCard, {
      props: { project: { ...mockProject, link: undefined } },
      global: { stubs: { TechIcon: true, RouterLink: RouterLinkStub } },
    });

    const links = w.findAll('a[href]');
    expect(links).toHaveLength(1);
    expect(links[0]!.attributes('href')).toBe(mockProject.repository);
  });

  it('should link the title and the image to the project detail page', () => {
    const routerLinks = wrapper.findAllComponents(RouterLinkStub);

    expect(routerLinks).toHaveLength(2);
    routerLinks.forEach(link => {
      expect(link.props('to')).toBe(`/projects/${mockProject.slug}`);
    });
  });
});

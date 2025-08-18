import { shallowMount, VueWrapper } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ref } from 'vue';

import ProjectView from '@/views/ProjectView.vue';

const mockContent = ref({
  projects: [
    { title: 'Project One', description: 'First project' },
    { title: 'Project Two', description: 'Second project' },
  ],
});

describe('Projects.vue', () => {
  let wrapper: VueWrapper<InstanceType<typeof ProjectView>>;

  beforeEach(() => {
    wrapper = shallowMount(ProjectView, {
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

  it('should render a ProjectCard for each project', () => {
    const cards = wrapper.findAllComponents({ name: 'ProjectCard' });
    expect(cards).toHaveLength(mockContent.value.projects.length);
  });

  it('should render no ProjectCards when projects is null', async () => {
    mockContent.value.projects = [];
    await wrapper.vm.$nextTick();

    const cards = wrapper.findAllComponents({ name: 'ProjectCard' });
    expect(cards).toHaveLength(0);
  });
});

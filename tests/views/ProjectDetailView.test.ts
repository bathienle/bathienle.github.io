import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import ProjectDetailView from '@/views/ProjectDetailView.vue';

const mockContent = ref({
  projects: [
    { slug: 'cytomine', title: 'Cytomine', description: 'Biomedical imaging platform', image: '/cytomine.png', startDate: 'Jan 2021', endDate: 'Present', status: 'Actively Maintained', repository: 'https://github.com/cytomine/cytomine', link: 'https://demo.cytomine.be/', tags: ['Open Source'], stack: [{ key: 'python', name: 'Python' }] },
  ],
});

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/projects/:slug', name: 'project', component: ProjectDetailView }],
});

const mountView = async (slug: string) => {
  await router.push(`/projects/${slug}`);
  await router.isReady();

  return shallowMount(ProjectDetailView, {
    global: {
      plugins: [router],
      provide: { content: mockContent },
      stubs: { TechIcon: true, RouterLink: RouterLinkStub },
    },
  });
};

describe('ProjectDetailView.vue', () => {
  it('should render the matching project details', async () => {
    const wrapper = await mountView('cytomine');

    expect(wrapper.find('h1').text()).toBe('Cytomine');
    expect(wrapper.text()).toContain('Biomedical imaging platform');
    expect(wrapper.find('img').attributes('src')).toBe('/cytomine.png');
    expect(wrapper.text()).toContain('Jan 2021 - Present');
    expect(wrapper.text()).toContain('Actively Contributing');
    expect(wrapper.findComponent({ name: 'TagItem' }).props('text')).toBe('Open Source');
  });

  it('should render a not found message for an unknown slug', async () => {
    const wrapper = await mountView('does-not-exist');

    expect(wrapper.text()).toContain('This project could not be found.');
  });
});

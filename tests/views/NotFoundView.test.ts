import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import NotFoundView from '@/views/NotFoundView.vue';

describe('NotFoundView.vue', () => {
  const mountView = () => shallowMount(NotFoundView, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  it('should render the not found message', () => {
    const wrapper = mountView();

    expect(wrapper.find('h1').text()).toBe('404');
    expect(wrapper.text()).toContain('Page Not Found');
  });

  it('should link back to the home page and the projects section', () => {
    const links = mountView().findAllComponents(RouterLinkStub);

    expect(links).toHaveLength(2);
    expect(links[0]!.props('to')).toBe('/');
    expect(links[1]!.props('to')).toBe('/#project');
  });
});

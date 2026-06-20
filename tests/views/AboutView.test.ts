import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';

import AboutView from '@/views/AboutView.vue';

describe('AboutView.vue', () => {
  const mockedDescription = 'This is a description about the app.';

  it('should render the description correctly', () => {
    const mockContent = {
      about: {
        description: mockedDescription,
        stats: [],
        interests: [],
      },
    };

    const wrapper = shallowMount(AboutView, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });

    expect(wrapper.text()).toContain('About');
    expect(wrapper.text()).toContain(mockedDescription);
  });

  it('should not render the description when about is null', () => {
    const wrapper = shallowMount(AboutView, {
      global: {
        provide: {
          content: ref(null),
        },
      },
    });

    expect(wrapper.text()).toContain('About');
    expect(wrapper.text()).not.toContain(mockedDescription);
  });

  it('should render a StatCard for each statistic', () => {
    const mockContent = {
      about: {
        description: mockedDescription,
        stats: [
          { value: '4+', label: 'Years experience', icon: 'mdi:calendar' },
          { value: '10', label: 'Projects', icon: 'mdi:folder' },
        ],
        interests: [],
      },
    };

    const wrapper = shallowMount(AboutView, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });

    const statCards = wrapper.findAllComponents({ name: 'StatCard' });
    expect(statCards).toHaveLength(mockContent.about.stats.length);
    expect(statCards[0]!.props('stat')).toEqual(mockContent.about.stats[0]);
    expect(statCards[1]!.props('stat')).toEqual(mockContent.about.stats[1]);
  });

  it('should render a TopicBox for each interest', () => {
    const mockContent = {
      about: {
        description: mockedDescription,
        stats: [],
        interests: [
          { title: 'Web Development', description: 'Building modern web apps.', icon: 'mdi:web' },
          { title: 'Open Source', description: 'Contributing to open source.', icon: 'mdi:github' },
        ],
      },
    };

    const wrapper = shallowMount(AboutView, {
      global: {
        provide: {
          content: ref(mockContent),
        },
      },
    });

    const topicBoxes = wrapper.findAllComponents({ name: 'TopicBox' });
    expect(topicBoxes).toHaveLength(mockContent.about.interests.length);
    expect(topicBoxes[0]!.props('topic')).toEqual(mockContent.about.interests[0]);
    expect(topicBoxes[1]!.props('topic')).toEqual(mockContent.about.interests[1]);
  });

  it('should render no StatCards when stats is empty', () => {
    const wrapper = shallowMount(AboutView, {
      global: {
        provide: {
          content: ref({ about: { description: mockedDescription, stats: [], interests: [] } }),
        },
      },
    });

    expect(wrapper.findAllComponents({ name: 'StatCard' })).toHaveLength(0);
  });
});

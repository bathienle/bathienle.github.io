import { describe, expect, it, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import type { Topic } from '@/types/content';
import TopicBox from '@/components/TopicBox.vue';

vi.mock('@iconify/vue', () => ({
  Icon: {
    name: 'Icon',
    template: '<span data-testid="icon" />',
    props: ['icon', 'width', 'height'],
  },
}));

const mockTopic: Topic = {
  title: 'Web Development',
  description: 'Building modern web applications.',
  icon: 'mdi:web',
};

describe('TopicBox.vue', () => {
  const createWrapper = () => shallowMount(TopicBox, { props: { topic: mockTopic } });

  it('should render the topic title', () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain(mockTopic.title);
  });

  it('should render the topic description', () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain(mockTopic.description);
  });

  it('should render the icon', () => {
    const wrapper = createWrapper();
    expect(wrapper.findComponent({ name: 'Icon' }).exists()).toBe(true);
  });

  it('should pass the correct icon value', () => {
    const wrapper = createWrapper();
    expect(wrapper.findComponent({ name: 'Icon' }).props('icon')).toBe(mockTopic.icon);
  });
});

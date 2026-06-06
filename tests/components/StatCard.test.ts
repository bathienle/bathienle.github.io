import { describe, expect, it, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import type { Stat } from '@/types/content';
import StatCard from '@/components/StatCard.vue';

vi.mock('@iconify/vue', () => ({
  Icon: {
    name: 'Icon',
    template: '<span data-testid="icon" />',
    props: ['icon', 'width', 'height'],
  },
}));

const baseStat: Stat = {
  value: '4+',
  label: 'Years experience',
  icon: 'mdi:calendar',
};

describe('StatCard.vue', () => {
  const createWrapper = () => shallowMount(StatCard, { props: { stat: baseStat } });

  it('should render the stat value', () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain('4+');
  });

  it('should render the stat label', () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain('Years experience');
  });

  it('should render the icon when provided', () => {
    const wrapper = createWrapper();
    expect(wrapper.findComponent({ name: 'Icon' }).exists()).toBe(true);
  });

  it('should not render the icon when omitted', () => {
    const stat: Stat = { value: '1', label: 'Projects', icon: undefined };
    const wrapper = shallowMount(StatCard, { props: { stat } });
    expect(wrapper.findComponent({ name: 'Icon' }).exists()).toBe(false);
  });
});

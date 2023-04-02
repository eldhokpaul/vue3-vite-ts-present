import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Component from '@components/base/toggle-color.vue';

describe('ToggleColor', () => {
  it('renders properly', () => {
    const wrapper = mount(Component, { props: { modelValue: true } });
    expect(wrapper).toBeTruthy();
  });

  it('should have the correct classes', () => {
    const wrapper = mount(Component, { props: { modelValue: true } });
    const divEl = wrapper.get('[data-testid=toggle-item]');
    expect(wrapper).toBeTruthy();
    expect(divEl.classes()).contains('bg-red-600');
    expect(divEl.classes()).contains('peer-checked:bg-green-600');
    expect(wrapper.classes()).contains('cursor-pointer');
  });

  it('should disable element correctly', () => {
    const wrapper = mount(Component, { props: { modelValue: true, disabled: true } });
    expect(wrapper).toBeTruthy();
    expect(wrapper.classes()).contains('cursor-not-allowed');
    expect(wrapper.classes()).not.contains('cursor-pointer');
  });
});

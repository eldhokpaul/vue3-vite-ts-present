import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Component from '@components/base/card.vue';

describe('Card', () => {
  it('renders properly', () => {
    const wrapper = mount(Component);
    expect(wrapper).toBeTruthy();
  });
});

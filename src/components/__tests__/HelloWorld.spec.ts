import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Component from '../HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Component, { props: { msg: 'Hello World' } });
    expect(wrapper.text()).toContain('Hello World');
  });
});

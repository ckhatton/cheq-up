import { mount } from '@vue/test-utils';
import Footer from '../../src/components/Footer.vue';

describe('Visibility', () => {
  it('renders the component', () => {
    const wrapper = mount(Footer);
    expect(wrapper.exists()).toBe(true);
  });

  it('matches the snapshot', () => {
    const wrapper = mount(Footer);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('contains the correct content', () => {
    const wrapper = mount(Footer);
    expect(wrapper.html()).toContain('footer');
    expect(wrapper.html()).toContain('img');
  });
});

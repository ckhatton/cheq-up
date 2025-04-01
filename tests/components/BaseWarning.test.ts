import { mount } from '@vue/test-utils';
import Warning from '../../src/components/BaseWarning.vue';

describe('Visibility', () => {
  it('renders the component', () => {
    const wrapper = mount(Warning);
    expect(wrapper.exists()).toBe(true);
  });

  it('matches the snapshot', () => {
    const wrapper = mount(Warning);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('contains the correct content', () => {
    const wrapper = mount(Warning);
    expect(wrapper.text()).toContain('There is still more to do...');
    expect(wrapper.text()).toContain(
      'There is TWO more steps we need you to do before we can continue with your order.'
    );
  });
});

describe('Props', () => {
  describe('Steps:', () => {
    it('renders two steps', () => {
      const steps = 2;
      const wrapper = mount(Warning, {
        props: { steps },
      });
      expect(wrapper.text()).toContain(
        `There is TWO more steps we need you to do before we can continue with your order.`
      );
    });

    it('renders one step', () => {
      const steps = 1;
      const wrapper = mount(Warning, {
        props: { steps },
      });
      expect(wrapper.text()).toContain(
        `There is ONE more step we need you to do before we can continue with your order.`
      );
    });

    it('does not render', () => {
      const steps = 0;
      const wrapper = mount(Warning, {
        props: { steps },
      });
      expect(wrapper.find('.warning').exists()).toBe(false);
    });
  });
});

describe('Accessibility', () => {
  it('has element label', () => {
    const wrapper = mount(Warning);
    const element = wrapper.find('div');
    expect(element.attributes('aria-label')).toBe('Warning');
  });
});

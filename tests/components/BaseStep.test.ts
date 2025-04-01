import { mount } from '@vue/test-utils';
import Step from '../../src/components/BaseStep.vue';

describe('Visibility', () => {
  it('renders the component', () => {
    const wrapper = mount(Step);
    expect(wrapper.exists()).toBe(true);
  });

  it('matches the snapshot', () => {
    const wrapper = mount(Step);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('contains the correct content', () => {
    const wrapper = mount(Step);
    expect(wrapper.find('.step-number').text()).toContain('1');
  });
});

describe('Props', () => {
  describe('Step:', () => {
    it('renders step number 1', () => {
      const step = 1;
      const wrapper = mount(Step, {
        props: { step },
      });
      expect(wrapper.find('.step-number').text()).toContain('1');
    });

    it('renders step number 2', () => {
      const step = 2;
      const wrapper = mount(Step, {
        props: { step },
      });
      expect(wrapper.find('.step-number').text()).toContain('2');
    });
  });

  describe('Title:', () => {
    it('renders title "ID Verification"', () => {
      const title = 'ID Verification';
      const wrapper = mount(Step, {
        props: { title },
      });
      expect(wrapper.find('.step-title').text()).toContain('ID Verification');
    });

    it('renders title "Head-to-Toe Picture"', () => {
      const title = 'Head-to-Toe Picture';
      const wrapper = mount(Step, {
        props: { title },
      });
      expect(wrapper.find('.step-title').text()).toContain('Head-to-Toe Picture');
    });
  });

  describe('State:', () => {
    it('renders state "active"', () => {
      const state = 'active';
      const wrapper = mount(Step, {
        props: { state },
      });
      expect(wrapper.find('.border-cheq-up-yellow').exists()).toBe(true);
    });

    it('renders state "error"', () => {
      const state = 'error';
      const wrapper = mount(Step, {
        props: { state },
      });
      expect(wrapper.find('.border-cheq-up-red').exists()).toBe(true);
    });

    it('renders state "completed"', () => {
      const state = 'completed';
      const wrapper = mount(Step, {
        props: { state },
      });
      expect(wrapper.find('.bg-cheq-up-green-dark').exists()).toBe(true);
      expect(wrapper.find('.step-title').text()).toContain('Completed');
    });

    it('renders state "disabled"', () => {
      const state = 'disabled';
      const wrapper = mount(Step, {
        props: { state },
      });
      expect(wrapper.find('.border-cheq-up-grey').exists()).toBe(true);
    });
  });
});

describe('Accessibility', () => {
  it('has element label', () => {
    const wrapper = mount(Step);
    const element = wrapper.find('div');
    expect(element.attributes('aria-label')).toBe('Step');
  });
});

import { mount } from '@vue/test-utils';
import PurchaseConfirmation from '../../src/components/BasePurchaseConfirmation.vue';

describe('Visibility', () => {
  it('renders the component', () => {
    const wrapper = mount(PurchaseConfirmation);
    expect(wrapper.exists()).toBe(true);
  });

  it('matches the snapshot', () => {
    const wrapper = mount(PurchaseConfirmation);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('contains the correct content', () => {
    const wrapper = mount(PurchaseConfirmation);
    expect(wrapper.text).toContain('Thank you for your purchase');
    expect(wrapper.text).toContain('Your order number is');
  });
});

describe('Visibility', () => {
  it('renders order number', () => {
    const orderNumber = 'CHEQ-5763';
    const wrapper = mount(PurchaseConfirmation, {
      props: { orderNumber },
    });
    expect(wrapper.text()).toContain(`Your order number is ${orderNumber}.`);
  });
});

describe('Accessibility', () => {
  it('has element label', () => {
    const wrapper = mount(PurchaseConfirmation);
    const element = wrapper.find('div');
    expect(element.attributes('aria-label')).toBe('Purchase Confirmation');
  });
});

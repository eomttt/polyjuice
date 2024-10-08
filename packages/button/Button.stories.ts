import { Button } from './Button';

customElements.get('polyjuice-button') ||
  customElements.define('polyjuice-button', Button);

export default {
  title: 'Polyjuice/Button',
};

const Template = () => `<polyjuice-button>Button</polyjuice-button>`;

export const Default = Template.bind({});

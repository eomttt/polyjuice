import './Button';

export default {
  title: 'Polyjuice/Button',
};

const Template = () =>
  `<polyjuice-button>
    ButtonText
  </polyjuice-button>`;

const TemplateWithSlot = () =>
  `<polyjuice-button>
    <span slot="left-slot">LeftSlot</span>
    ButtonText
    <span slot="right-slot">RightSlot</span>
  </polyjuice-button>`;

export const Default = Template.bind({});
export const WithSlot = TemplateWithSlot.bind({});

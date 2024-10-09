import './Switch';

export default {
  title: 'Polyjuice/Switch',
};

const Template = () =>
  `<polyjuice-switch>
    <div slot="control">
      <div slot="thumb"></div>
    </div>
    <span slot="label">Switch</span>
  </polyjuice-switch>`;

export const Default = Template.bind({});

import { Meta, StoryFn } from '@storybook/vue3';
import { screen, userEvent } from '@storybook/testing-library';
import Button from '.';

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    label: {
      description: '按钮文本',
      defaultValue: 'Button',
    },
    primary: {
      description: '是否使用主题色',
      defaultValue: false,
    },
    size: {
      defaultValue: 'medium',
      description: '按钮大小',
      options: ['small', 'medium', 'large'],
    }
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = '主题按钮'
Primary.args = {
  primary: true,
}
// Primary.play = async () => {
//   await userEvent.click(screen.getByRole('button'));
// }


export const Secondary = Template.bind({});
Secondary.args = {
}

export const Large = Template.bind({});
Large.args = {
  size: 'large',
}

export const Small = Template.bind({});
Small.args = {
  size: 'small',
}

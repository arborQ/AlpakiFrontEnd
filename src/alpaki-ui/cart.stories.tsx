import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Cart } from './cart';

export default {
  title: 'Example/Cart',
  component: Cart,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Cart',
};

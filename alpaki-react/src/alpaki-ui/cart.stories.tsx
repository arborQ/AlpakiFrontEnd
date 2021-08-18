import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Cart } from './cart';

export default {
    title: 'AlpakiUI/Cart',
    component: Cart,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => {

    return <div>
        <Cart {...args} />
    </div>
};

export const Primary = Template.bind({});
Primary.args = {
    children: "test primary"
};

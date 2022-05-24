
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartList from '.';

export default {
    title: 'CartList',
    component: CartList
} as ComponentMeta<typeof CartList>;

const Template: ComponentStory<typeof CartList> = (args) => <CartList {...args} />;

export const Default = Template.bind({});

Default.args = {
    cart: [
        {
            uuid: '1',
            title: 'Prova titolo',
            cover_image_url: 'https://images.unsplash.com/photo-1653311236202-aa57d07e0b9c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070',
            retail_price: {
                formatted_iso_value: '€ 18,99'
            },
            quantity: 1
        }
    ],
    increaseQnt: () => {},
    decreaseQnt: () => {},
    remove: () => {}
};
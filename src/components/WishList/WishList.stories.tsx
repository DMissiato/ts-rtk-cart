
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WishList from '.';

export default {
    title: 'WishList',
    component: WishList
} as ComponentMeta<typeof WishList>;

const Template: ComponentStory<typeof WishList> = (args) => <WishList {...args} />;

export const Default = Template.bind({});

Default.args = {
    wishList: [
        {
            uuid: '1',
            title: 'Prova titolo'
        }
    ],
    remove: () => {}
};
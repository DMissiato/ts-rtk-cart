
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ActivityCard from './index';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ActivityCard',
  component: ActivityCard,
} as ComponentMeta<typeof ActivityCard>;

const Template: ComponentStory<typeof ActivityCard> = (args) => <ActivityCard {...args} />;

export const Complete = Template.bind({});

Complete.args = {
    value: {
        uuid: '1',
        title: 'Prova titolo',
        cover_image_url: 'https://images.unsplash.com/photo-1653311236202-aa57d07e0b9c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070',
        retail_price: {
            formatted_iso_value: '€ 18,99'
        },
        quantity: 1
    },
    addToCart: () => {},
    addToWishList: {
        isAddable: true,
        fn: () => {}
    }
};

export const Large = Template.bind({});

Large.args = {
    large: true,
    value: {
        uuid: '1',
        title: 'Prova titolo',
        cover_image_url: 'https://images.unsplash.com/photo-1653311236202-aa57d07e0b9c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070',
        retail_price: {
            formatted_iso_value: '€ 18,99'
        },
        quantity: 1
    },
    addToCart: () => {},
    addToWishList: {
        isAddable: true,
        fn: () => {}
    }
};

export const AddToCart = Template.bind({});

AddToCart.args = {
    value: {
        uuid: '1',
        title: 'Prova titolo',
        cover_image_url: 'https://images.unsplash.com/photo-1653311236202-aa57d07e0b9c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070',
        retail_price: {
            formatted_iso_value: '€ 18,99'
        },
        quantity: 1
    },
    addToCart: () => {}
};

export const AddToWishes = Template.bind({});

AddToWishes.args = {
    value: {
        uuid: '1',
        title: 'Prova titolo',
        cover_image_url: 'https://images.unsplash.com/photo-1653311236202-aa57d07e0b9c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070',
        retail_price: {
            formatted_iso_value: '€ 18,99'
        },
        quantity: 1
    },
    addToWishList: {
        isAddable: true,
        fn: () => {}
    }
};
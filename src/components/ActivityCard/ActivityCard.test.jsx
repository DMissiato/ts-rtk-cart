
import ActivityCard from '.';
import { render, screen } from '@testing-library/react';

const activity = { 
    title: 'prova',
    cover_image_url: 'https://images.unsplash.com/photo-1653013351311-a92a8fb93c1f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064',
    retail_price: {
        formatted_iso_value: '€ 10,00'
    }
};

describe('ActivityCard component', () =>
{
    test('render title', () =>
    {
        render(<ActivityCard value={activity} />);
        expect(screen.getByText(activity.title)).toBeInTheDocument();
        expect(screen.getByText(activity.retail_price.formatted_iso_value)).toBeInTheDocument();
    });

    test('render plus button (add to cart)', () =>
    {
        const cart = jest.fn();
        render(<ActivityCard value={activity} addToCart={cart} />);
        expect(screen.getByRole('cart')).toBeInTheDocument();
    });

    test('do not render plus button (add to cart)', () =>
    {
        render(<ActivityCard value={activity} />);
        expect(screen.queryByRole('cart')).not.toBeInTheDocument();
    });

    test('render full/selected heart', () =>
    {
        const wish = {
            isAddable: false,
            fn: jest.fn()
        }
        render(<ActivityCard value={activity} addToWishList={wish} />);
        expect(screen.getByRole('wish')).toHaveClass('active');
    });

    test('render empty/selectable heart', () =>
    {
        const wish = {
            isAddable: true,
            fn: jest.fn()
        }
        render(<ActivityCard value={activity} addToWishList={wish} />);
        expect(screen.getByRole('wish')).not.toHaveClass('active');
    });

});
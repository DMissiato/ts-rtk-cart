
import WishList from ".";
import { render, screen } from '@testing-library/react';

const wishes = [
    {
        uuid: '123',
        title: 'test'
    }
];

describe('CartList component', () => 
{
    test('render blank component', () => 
    {
        render(<WishList cart={[]} />);
        expect(screen.getByText('WishList')).toBeInTheDocument();
    });

    test('do not render component (no props)', () => 
    {
        render(<WishList/>);
        expect(screen.getByText('La lista dei desideri è vuota.')).toBeInTheDocument();
    });

    test('render list', () => 
    {
        render(<WishList wishList={wishes} />);
        expect(screen.getByText(wishes[0].title) &&
                screen.getByText('x')).toBeInTheDocument();
    });

});
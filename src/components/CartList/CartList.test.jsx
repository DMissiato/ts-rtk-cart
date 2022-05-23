
import CartList from ".";
import { render, screen } from '@testing-library/react';

const activities = [
    {
        uuid: '123',
        title: 'test',
        quantity: 2,
    }
];

describe('CartList component', () => 
{
    test('render blank component', () => 
    {
        render(<CartList cart={[]} />);
        expect(screen.getByText('Cart')).toBeInTheDocument();
    });

    test('do not render component (no props)', () => 
    {
        render(<CartList/>);
        expect(screen.getByText('Il carrello è vuoto.')).toBeInTheDocument();
    });

    test('render list', () => 
    {
        render(<CartList cart={activities} />);
        expect(screen.getByText(activities[0].title) && 
                screen.getByText(activities[0].quantity) &&
                screen.getByText('+') &&
                screen.getByText('-') &&
                screen.getByText('x')).toBeInTheDocument();
    });

});
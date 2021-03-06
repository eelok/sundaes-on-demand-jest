import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Options from "../Options";

test('update scoop subtotal when scoops change', async () => {
    render(<Options optionType='Scoops'/>);
    //make sure total starts out $0.00
    let scoopsSubtotal = screen.getByText('Scoops total $', {exact: false});
    expect(scoopsSubtotal).toHaveTextContent('0.00');

    //update vanillas coops to 1 and check the subtotal
    let vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'});
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent('2.00');

    //update chocolate scoops to 2 and check subtotal
    let chocolateInput = await screen.findByRole('spinbutton', {name: 'Chocolate'});
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '2');
    expect(scoopsSubtotal).toHaveTextContent('6.00');
});
import {render, screen, fireEvent} from '@testing-library/react';
import SummaryForm from './../SummaryForm';

test('by checking checkbox enables button, unchecking checkbox disables button', () => {
    render(<SummaryForm/>);
    let termsAndConditionsCheckbox = screen.getByRole('checkbox', {name: 'I am agree to Terms and Conditions'});
    let confirmOrderButton = screen.getByRole('button', {name: 'Confirm order'});
    expect(termsAndConditionsCheckbox).not.toBeChecked();

    fireEvent.click(termsAndConditionsCheckbox);
    expect(confirmOrderButton).toBeEnabled();

    fireEvent.click(termsAndConditionsCheckbox);
    expect(confirmOrderButton).toBeDisabled();
});
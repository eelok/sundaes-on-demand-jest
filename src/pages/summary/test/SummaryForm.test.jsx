import {render, screen, fireEvent} from '@testing-library/react';
import SummaryForm from './../SummaryForm';

test('initial Conditions', () => {
    render(<SummaryForm/>);
    let termsAndConditionsCheckbox = screen.getByRole('checkbox', {name: 'I agree to Terms and Conditions'});
    let confirmOrderButton = screen.getByRole('button', {name: 'Confirm order'});
    expect(termsAndConditionsCheckbox).not.toBeChecked();
    expect(confirmOrderButton).toBeDisabled();
})

test('by checking checkbox enables button, unchecking checkbox disables button', () => {
    render(<SummaryForm/>);
    let termsAndConditionsCheckbox = screen.getByRole('checkbox', {name: 'I agree to Terms and Conditions'});
    let confirmOrderButton = screen.getByRole('button', {name: 'Confirm order'});

    fireEvent.click(termsAndConditionsCheckbox);
    expect(confirmOrderButton).toBeEnabled();

    fireEvent.click(termsAndConditionsCheckbox);
    expect(confirmOrderButton).toBeDisabled();
});
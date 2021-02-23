import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import SummaryForm from './../SummaryForm';
import userEvent from "@testing-library/user-event";

test('initial Conditions', () => {
    render(<SummaryForm/>);
    let termsAndConditionsCheckbox = screen.getByRole('checkbox', {name: 'I agree to Terms and Conditions'});
    let confirmOrderButton = screen.getByRole('button', {name: /confirm order/i});

    expect(termsAndConditionsCheckbox).not.toBeChecked();
    expect(confirmOrderButton).toBeDisabled();
});

test('by checking checkbox enables button, unchecking checkbox disables button', () => {
    render(<SummaryForm/>);
    let termsAndConditionsCheckbox = screen.getByRole('checkbox', {name: 'I agree to Terms and Conditions'});
    let confirmOrderButton = screen.getByRole('button', {name: 'Confirm order'});

    userEvent.click(termsAndConditionsCheckbox);
    expect(confirmOrderButton).toBeEnabled();

    userEvent.click(termsAndConditionsCheckbox);
    expect(confirmOrderButton).toBeDisabled();
});

test('popover responds to hover', async () => {
    render(<SummaryForm/>);
    // /popover starts out hidden
    let nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    let termsAndConditions = screen.getByText(/Terms and Conditions/i);
    userEvent.hover(termsAndConditions);
    let popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
        screen.getByText(/no ice cream will actually be delivered/i)
    );
});
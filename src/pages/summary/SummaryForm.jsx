import React from 'react';
import { useState } from 'react';

const SummaryForm = () =>{

    const [isEnabled, setIsEnabled] = useState(false);

    return(
        <form>
            <input
                type="checkbox"
                id="termsAndConditions"
                checked={isEnabled}
                onChange={(e) => setIsEnabled(e.target.checked)}
            />
            <label htmlFor="termsAndConditions">I agree to Terms and Conditions</label>

            <button type='button'
                disabled = {!isEnabled}
            >
                Confirm order
            </button>
        </form>
    );
}

export default SummaryForm;
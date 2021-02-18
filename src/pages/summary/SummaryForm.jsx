import React from 'react';
import { useState } from 'react';

const SummaryForm = () =>{

    const [isEnabled, setIsEnabled] = useState(false);

    return(
        <div>
            <input
                type="checkbox"
                id="termsAndConditions"
                defaultChecked={isEnabled}
                onChange={(e) => setIsEnabled(e.target.checked)}
            />
            <label htmlFor="termsAndConditions">I am agree to Terms and Conditions</label>

            <button type='button'
                disabled = {!isEnabled}
            >
                Confirm order
            </button>
        </div>
    );
}

export default SummaryForm;
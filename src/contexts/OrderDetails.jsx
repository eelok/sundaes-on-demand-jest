import {createContext, useContext, useState, useMemo, useEffect} from "react";

export const OrderDetails = createContext();

//create custom hook to check whether we're inside a provider
///todo зачем делать эту проверку, как OrderDetails можно использовать в не OrderDetailsProvider
function useOrderDetails(){
    const context = useContext(useOrderDetails);

    if(!context){
        throw new Error('useOrderDetails must be used within an OrderDetailsProvider');
    }

    return context;
}

export const OrderDetailsProvider =(props)=> {
    const [optionCounts, setOptionCounts] = useState({
        scoops: new Map(),
        toppings: new Map(),
    });

    const [totals, setTotals] = useState({
        scoops: 0,
        toppings: 0,
        grandTotal: 0
    });

    useEffect(() => {

    }, [optionCounts]);

    const value = useMemo(() => {
        function updateItemCount(itemName, newItemCount, optionType){
            const newOptionCounts = { ...optionCounts};

            // update option count for this item with the new value
            const optionCountsMap = optionCounts[optionType];
            optionCountsMap.set(itemName, parseInt(newItemCount));

            setOptionCounts(newOptionCounts);

        }
       // getter: object containing option counts form scoops and toppings, subtotals and totals
       //  setter: updateOptionCount
        return [{ ...optionCounts}, updateItemCount];
    }, [optionCounts]);

    return (<OrderDetails.Provider value={value} {...props}/>)
}
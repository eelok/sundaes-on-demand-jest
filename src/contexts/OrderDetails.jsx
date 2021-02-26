import { createContext, useContext, useState, useMemo} from "react";

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
    })

    const value = useMemo(() => {
        function updateItemCount(itemName, newItemCount, optionType){
            const newOptionCounts = { ...optionCounts}
        }
       // getter: object containing option counts form scoops and toppings, subtotals and totals
       //  setter: updateOptionCount
        return [{ ...optionCounts}];
    }, []);

    return (<OrderDetails.Provider value={} {...props}/>)
}
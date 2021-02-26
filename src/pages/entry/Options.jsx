import axios from "axios";
import {useEffect, useState} from 'react';
import ScoopOptions from "./ScoopOptions";
import ToppingOption from './ToppingOption';
import Row from 'react-bootstrap/Row';
import AlertBanner from "../common/AlertBanner";


const Options = ({optionType}) => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    // optionType is scoops or toppings
    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .catch((error) => setError(true));
    }, [optionType]);

    if(error){
        return <AlertBanner/>
    }
    let ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption

    const optionItems = items.map(item => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ));

    return (<Row>{optionItems}</Row>);
}
export default Options;
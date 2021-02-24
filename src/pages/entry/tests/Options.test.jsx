import {render, screen} from "@testing-library/react";
import Options from "../Options";
import ToppingOption from "../ToppingOption";


test('displays image for each scoop option from server', async () => {
    render(<Options optionType={'scoops'}/>);

    // find images
    let scoopImages = await screen.findAllByRole('img', {name: /scoop$/i});
    expect(scoopImages).toHaveLength(2);

    // confirm alt text images
    // @ts-ignore
    let altText = scoopImages.map(element => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image form each toppings option from server', async () => {
   render(<Options optionType={'toppings'}/>);

   //find images
    let toppingImages = await screen.findAllByRole('img', {name: /topping$/i});
    expect(toppingImages).toHaveLength(3);

    //confirm alt text images
    // @ts-ignore
    let toppingAltText = toppingImages.map(toppingImage => toppingImage.alt);
    expect(toppingAltText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
});
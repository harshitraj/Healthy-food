import IndividualItem from "./IndividualItem";
import { useState } from "react";

const RenderFoodItems = ({ items }) => {

    let [activeItems, setActiveItems] = useState([]);

    let onBuyButton = (item, event) => {
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
        // On click on buy items, Color of that item changes as per 'active' class in bootstrap
    }
    return <>                           

        <ul className="list-group">
            {items.map((item) => (
                <IndividualItem
                    key={item}
                    foodItem={item}
                    bought={activeItems.includes(item)}
                    handleBuyButton={(event) => onBuyButton(item, event)}
                ></IndividualItem>))}
            {/*Passing items from this parent to IndividualItem child with item name stored in fooditem type variable. Also passing key attributes to each items as it is unique for all items. Also parent is passsing the behaviour or what work that child needs to do with that paticular foodItem. So parent defines a function and child invoke it. It is commonly used for event handling. It also enables communication between parent and child*/}
        </ul>
    </>
}

export default RenderFoodItems;
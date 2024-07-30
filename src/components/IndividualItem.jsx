import styles from './IndividualItem.module.css';
{/*Here styles is a parent object which contains all defined class or any tag in that particular imported css module */ }

const IndividualItem = (props) => {
    // const ButtonClicked = (event) =>
    // {
    //     console.log(event);
    //     console.log(`${props.foodItem} being bought`);
    // }
    {/*Props is an object which contains all attributes which was passed by parent */ }
    return <li
        className={`${styles['kg-item']} list-group-item   ${props.bought && 'active'} `}> {props.foodItem}
        <button className={`${styles.button} btn btn-info`}
            onClick={props.handleBuyButton}
        >Buy</button>
        {/*Whenever we write onClick method then at that time by default event is also being passed. Event will be an object which contains all the details whatever action has been performed. We can prin t event by writing as:   onclick={(event)=> {handleBuyButton(event)}}*/}
    </li>
    {/*Catching items with foodItem variable name(variable which was passed by parent. By using props.(attribute_name), we can use particular attributes here.*/ }
}

export default IndividualItem;
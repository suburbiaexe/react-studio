import './../App.css';
import AddButton from './AddButton.js';
import { useState } from "react";

// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    const [count, setCount] = useState(0);
    // console.log(count);

    return (
        <div className="BakeryItem">
            <img src={props.pic} alt={props.name} id="item-img"></img>
            <h3 id="text">{props.name}</h3>
            <p id="text">{props.descrip}</p>

            <div className="AddToCart">
                <p>{props.price}</p>
                <AddButton tp={props.totalPrice} setTP={props.setTotalPrice} price={props.price} cartCount={count} setCartCount={setCount} cartMap={props.cartStuff} setCartMap={props.setCart} itemName={props.name} />
            </div>
        </div>
    );
}
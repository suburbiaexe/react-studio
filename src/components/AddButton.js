import { useState } from "react";

export default function AddButton(props) {
    // const [count, setCount] = useState(0);

    return (
        <button 
        onClick={() => 
            {props.setTP(Math.round((props.tp + props.price) * 1e12) / 1e12);
            props.setCartCount(props.cartCount + 1);
            props.setCartMap(
                props.cartMap.set(props.itemName, props.cartCount + 1)
            )}}>
            Add to Cart
        </button>
    );
}
import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
// import AddButton from "./components/AddButton";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function PrintMap(m) {
  let arr = [];
  m.forEach((value, key) => {
    arr.push(key, ": ", value, <br />);
  });
  return arr;
}

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0);
  const [track, setTrack] = useState(new Map());

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="Pastries">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem name={item.name} pic={item.image} descrip={item.description} price={item.price} totalPrice={total} setTotalPrice={setTotal} cartStuff={track} setCart={setTrack} /> // replace with BakeryItem component
        ))}
      </div>

      <div className="Cart">
        <h2>Cart</h2>
        <p id="text">{PrintMap(track)}</p>
        <p>Total Cost: ${total}</p>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;

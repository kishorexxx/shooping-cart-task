import React, { useState } from "react";
import Cart from "./Cart";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddItem = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveItem = (item) => {
    setCart(cart.filter((cartItem) => item.id !== cartItem.id)); // filter () method allows us to filter through an array - iterating over the existing values
    // cartItem.Id : whatever items contain in cart there Id
    // item.id : id of item on which we clicked
  };

  return (
    <div>
      <Navbar count={cart.length} />
      <Home />
      <Cart
        cart={cart}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
      />
      <Footer />
    </div>
  );
}
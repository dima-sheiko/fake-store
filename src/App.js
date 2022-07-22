import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './styles/style.css';
import './styles/normalize.css';

export const CartContext = React.createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <CartContext.Provider value={cartItems}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop onAdd={onAdd} />} />
          <Route path='about' element={<About />} />
          <Route path='shopping-cart' element={<Cart onAdd={onAdd} onRemove={onRemove}/>} />
        </Routes>
        <Footer></Footer>
      </CartContext.Provider>
    </>
  );
}

export default App;

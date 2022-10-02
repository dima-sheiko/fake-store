import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import './styles/style.css';
import './styles/normalize.css';

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
      <Navbar cartItems={cartItems}></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop onAdd={onAdd} />} />
        <Route path='about' element={<About />} />
        <Route
          path='cart'
          element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />}
        />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

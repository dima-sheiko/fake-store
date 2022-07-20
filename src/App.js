import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './styles/style.css';
import './styles/normalize.css';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='about' element={<About />} />
        <Route path='shopping-cart' element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

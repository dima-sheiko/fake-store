import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import './styles/style.css';
import './styles/normalize.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    </>
  );
}

export default App;

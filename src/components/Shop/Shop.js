import React, { useState, useEffect } from 'react';
import { Main, ItemsWrapper } from './Shop.styled';
import { ShopItem } from '../ShopItem/ShopItem';
import axios from 'axios';

/* Logic */

export const Shop = ({ onAdd }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products?limit=9'
      );
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Main>
      <ItemsWrapper>
        {products.map((product) => (
          <ShopItem key={product.id} product={product} onAdd={onAdd}></ShopItem>
        ))}
      </ItemsWrapper>
    </Main>
  );
};

import React from 'react';
import { Main, ItemsWrapper } from './Shop.styled';
import data from '../../data';
import ShopItem from '../ShopItem/ShopItem';

/* Logic */

function Shop({ onAdd }) {
  const { products } = data;

  return (
    <Main>
      <ItemsWrapper>
        {products.map((product) => (
          <ShopItem key={product.id} product={product} onAdd={onAdd}></ShopItem>
        ))}
      </ItemsWrapper>
    </Main>
  );
}

export default Shop;





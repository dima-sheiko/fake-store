import React from 'react';
import styled from 'styled-components';
import data from '../data';
import ShopItem from './ShopItem';

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

/* Styles */

const Main = styled.main`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px;
`;

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: 1194px) {
    justify-content: center;
    grid-template-columns: repeat(2, 300px);
  }

  @media (max-width: 1070px) {
    margin-top: 0;
  }

  @media (max-width: 683px) {
    justify-content: center;
    grid-template-columns: repeat(1, 250px);
  }
`;
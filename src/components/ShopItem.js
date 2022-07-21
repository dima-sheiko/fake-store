import React from 'react';
import styled from 'styled-components';

function ShopItem({ product }) {
  return (
    <Item>
      <ImageWrapper>
        <ItemImage src={product.image} alt='product image' />
      </ImageWrapper>
      <DescriptionWrapper>
        <ItemName>{product.title}</ItemName>
        <ItemPrice>${product.price}</ItemPrice>
        <AddBtn>Add To Cart</AddBtn>
      </DescriptionWrapper>
    </Item>
  );
}

export default ShopItem;

/* Styles */

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #dad7cd;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  height: 190px;
  padding: 10px;
  margin: 0 auto;
`;

const ItemImage = styled.img`
  height: 100%;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
  border-top: 1px solid #dad7cd;
  width: 100%;
`;

const ItemName = styled.p`
  margin-top: 15px;
  font-size: 23px;
  font-weight: bold;
`;

const ItemPrice = styled.p`
  font-size: 18px;
`;

const AddBtn = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #000000;
  color: #fff;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

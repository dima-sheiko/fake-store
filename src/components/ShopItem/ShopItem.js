import React from 'react';
import {
  Item,
  ImageWrapper,
  ItemImage,
  DescriptionWrapper,
  ItemName,
  ItemPrice,
  AddBtn,
} from './ShopItem.styled';

/* Logic */

function ShopItem({ product, onAdd }) {
  return (
    <Item>
      <ImageWrapper>
        <ItemImage src={product.image} alt={product.title} />
      </ImageWrapper>
      <DescriptionWrapper>
        <ItemName>{product.title}</ItemName>
        <ItemPrice>${product.price}</ItemPrice>
        <AddBtn onClick={() => onAdd(product)} name='add to cart'>
          Add To Cart
        </AddBtn>
      </DescriptionWrapper>
    </Item>
  );
}

export default ShopItem;

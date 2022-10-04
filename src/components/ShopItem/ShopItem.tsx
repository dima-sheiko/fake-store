import {
  Item,
  ImageWrapper,
  ItemImage,
  DescriptionWrapper,
  ItemName,
  ItemPrice,
  AddBtn,
} from './ShopItem.styled';
import { Product } from '../Shop/Shop';

// Types 

type ShopItemProps = {
  product: Product;
  onAdd: (product: Product) => void;
};

// Logic 

export const ShopItem = ({ product, onAdd }: ShopItemProps) => {
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
};

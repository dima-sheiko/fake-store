import React from 'react';
import {
  Main,
  EmptyWrapper,
  EmptyCart,
  EmptyCartText,
  EmptyCartImage,
  CartWrapper,
  ItemWrapper,
  CartItem,
  ItemImage,
  Image,
  ItemDetails,
  ItemTitle,
  ItemButtons,
  Button,
  ItemPrice,
  TotalPrice,
  CheckoutButton,
} from './Cart.styled';
import frown from '../../assets/icons/frown.svg';

/* Logic */

function Cart({ onAdd, onRemove, cartItems }) {
  const totalPrice = cartItems
    .reduce((acc, el) => acc + el.price * el.quantity, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <Main>
        <EmptyWrapper>
          <EmptyCart>
            <EmptyCartText>Your cart is empty</EmptyCartText>
            <EmptyCartImage src={frown} alt='frown' />
          </EmptyCart>
        </EmptyWrapper>
      </Main>
    );
  } else {
    return (
      <Main>
        <CartWrapper>
          <ItemWrapper>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage>
                  <Image src={item.image} alt='shop item' />
                </ItemImage>
                <ItemDetails>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemButtons>
                    <Button onClick={() => onAdd(item)} name='add'>
                      +
                    </Button>
                    {item.quantity}
                    <Button onClick={() => onRemove(item)} name='delete'>
                      -
                    </Button>
                  </ItemButtons>
                  <ItemPrice>${item.price}</ItemPrice>
                </ItemDetails>
              </CartItem>
            ))}
            <TotalPrice>Total: ${totalPrice}</TotalPrice>
          </ItemWrapper>
          <CheckoutButton name='checkout'>Checkout</CheckoutButton>
        </CartWrapper>
      </Main>
    );
  }
}

export default Cart;

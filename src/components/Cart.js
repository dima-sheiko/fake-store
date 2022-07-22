import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../App';
import frown from '../assets/icons/frown.svg';

function Cart({ onAdd, onRemove }) {
  const cart = useContext(CartContext);

  const totalPrice = cart
    .reduce((acc, el) => acc + el.price * el.quantity, 0)
    .toFixed(2);

  if (cart.length === 0) {
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
            {cart.map((item) => (
              <CartItem key={item.id}>
                <ItemImage>
                  <Image src={item.image} />
                </ItemImage>
                <ItemDetails>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemButtons>
                    <Button onClick={() => onAdd(item)}>+</Button>
                    {item.quantity}
                    <Button onClick={() => onRemove(item)}>-</Button>
                  </ItemButtons>
                  <ItemPrice>${item.price}</ItemPrice>
                </ItemDetails>
              </CartItem>
            ))}
            <TotalPrice>Total: ${totalPrice}</TotalPrice>
          </ItemWrapper>
          <CheckoutButton>Checkout</CheckoutButton>
        </CartWrapper>
      </Main>
    );
  }
}

export default Cart;

/* Styles */

const Main = styled.main`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px;
`;

/* Empty Cart */

const EmptyWrapper = styled.div`
  margin: 0 auto;
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const EmptyCartText = styled.div`
  font-size: 28px;
`;

const EmptyCartImage = styled.img`
  width: 80px;
`;

/* Regular Cart */

const CartWrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  padding: 40px;
  border: 1px solid #dad7cd;
  border-radius: 10px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 65px;
`;

const ItemImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 150px;
`;

const ItemDetails = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ItemButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Button = styled.button`
  background-color: #000000;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
const ItemPrice = styled.div`
  font-size: 18px;
`;

const TotalPrice = styled.div`
  font-size: 30px;
  font-weight: bold;
  align-self: center;
`;

const CheckoutButton = styled.button`
  margin-top: 20px;
  padding: 15px;
  background-color: #000000;
  color: #fff;
  border-radius: 10px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

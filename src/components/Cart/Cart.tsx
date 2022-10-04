import {
  Main,
  EmptyWrapper,
  EmptyCart,
  EmptyCartText,
  EmptyCartImage,
  CartWrapper,
  ItemWrapper,
  Item,
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
import { Product } from '../Shop/Shop';
import { CartItem } from '../../App';

// Types 

type CartProps = {
  onAdd: (product: Product) => void;
  onRemove: (product: Product) => void;
  cartItems: CartItem[];
};

// Logic 

export const Cart = ({ onAdd, onRemove, cartItems }: CartProps) => {
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
              <Item key={item.id}>
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
              </Item>
            ))}
            <TotalPrice>Total: ${totalPrice}</TotalPrice>
          </ItemWrapper>
          <CheckoutButton name='checkout'>Checkout</CheckoutButton>
        </CartWrapper>
      </Main>
    );
  }
};

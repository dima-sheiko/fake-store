import React, { useContext } from 'react';
import {
  Header,
  HeaderWrapper,
  Title,
  Nav,
  NavbarLink,
  CartWrapper,
  CartCount,
  CartIcon,
} from './Navbar.styled';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import bag from '../../assets/icons/bag.svg';

/* Logic */

function Navbar() {
  const cart = useContext(CartContext);

  return (
    <Header>
      <HeaderWrapper>
        <Link to='/'>
          <Title>FakeStore</Title>
        </Link>
        <Nav>
          <NavbarLink to='/'>Home</NavbarLink>
          <NavbarLink to='/shop'>Shop</NavbarLink>
          <NavbarLink to='/about'>About</NavbarLink>
          <NavbarLink to='/cart'>
            <CartWrapper>
              {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
              <CartIcon src={bag} alt='bag-icon' />
            </CartWrapper>
          </NavbarLink>
        </Nav>
      </HeaderWrapper>
    </Header>
  );
}

export default Navbar;

import React from 'react';
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
import bag from '../../assets/icons/bag.svg';

/* Logic */

export const Navbar = ({ cartItems }) => {
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
              {cartItems.length > 0 && (
                <CartCount>{cartItems.length}</CartCount>
              )}
              <CartIcon src={bag} alt='bag-icon' />
            </CartWrapper>
          </NavbarLink>
        </Nav>
      </HeaderWrapper>
    </Header>
  );
};

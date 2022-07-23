import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../App';
import bag from '../assets/icons/bag.svg';

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
          <NavbarLink to='/shopping-cart'>
            <CartWrapper>
              {cart.length > 0 ? <CartCount>{cart.length}</CartCount> : ''}
              <CartIcon src={bag} alt='bag-icon' />
            </CartWrapper>
          </NavbarLink>
        </Nav>
      </HeaderWrapper>
    </Header>
  );
}

export default Navbar;

/* Styles */

const Header = styled.header`
  background-color: #000000;
  color: #fff;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 1400px) {
    justify-content: space-around;
  }

  @media (max-width: 909px) {
    flex-direction: column;
    padding: 30px;
    gap: 20px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 60px;
  color: #46ffd3;

  @media (max-width: 1400px) {
    font-size: 50px;
  }

  @media (max-width: 450px) {
    font-size: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  font-size: 24px;

  @media (max-width: 450px) {
    font-size: 18px;
    gap: 35px;
  }
`;

const NavbarLink = styled(NavLink)`
  color: #fff;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const CartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.01);
    transition: 0.5s;
  }
`;

const CartCount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 37px;
  right: 37px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: #46ffd3;
  font-size: 18px;
  font-weight: bold;
  color: #000000;

  @media (max-width: 1400px) {
    top: 30px;
    right: 30px;
    width: 20px;
    height: 20px;
    font-size: 15px;
  }

  @media (max-width: 450px) {
    top: 26px;
    right: 26px;
    width: 18px;
    height: 18px;
    font-size: 13px;
  }
`;

const CartIcon = styled.img`
  width: 55px;

  @media (max-width: 1400px) {
    width: 45px;
  }

  @media (max-width: 450px) {
    width: 40px;
  }
`;

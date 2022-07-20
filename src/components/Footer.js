import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import background from '../assets/background-wave.png';

function Footer() {
  const location = useLocation();

  return (
    <footer>
      {location.pathname === '/shop' ? null : (
        <FooterImage src={background} alt='footer image' />
      )}
    </footer>
  );
}

export default Footer;

/* Styles */

const FooterImage = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: -1;
`;

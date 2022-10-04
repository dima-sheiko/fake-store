import { FooterImage } from './Footer.styled';
import { useLocation } from 'react-router-dom';
import background from '../../assets/background-wave.png';

// Logic 

export const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      {location.pathname === '/shop' || location.pathname === '/cart' ? null : (
        <FooterImage src={background} alt='footer image' />
      )}
    </footer>
  );
};

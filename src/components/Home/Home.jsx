import React from 'react';
import {
  Main,
  HomeWrapper,
  HomeBlock,
  HomeTitle,
  HomeSubtitle,
  HomeDivider,
  HomeButton,
  HomeImage,
} from './Home.styled';
import { Link } from 'react-router-dom';
import main from '../../assets/main.png';
import underline from '../../assets/underline.png';

/* Logic */

function Home() {
  return (
    <Main>
      <HomeWrapper>
        <HomeBlock>
          <HomeTitle>Lorem Ipsum</HomeTitle>
          <HomeSubtitle>
            Etiam scelerisque scelerisque est. Ut sed porttitor lectus.{' '}
          </HomeSubtitle>
          <HomeDivider src={underline} alt='underline' />
          <Link to='/shop'>
            <HomeButton name='shop'>Shop now</HomeButton>
          </Link>
        </HomeBlock>
        <HomeImage src={main} alt='main image' />
      </HomeWrapper>
    </Main>
  );
}

export default Home;

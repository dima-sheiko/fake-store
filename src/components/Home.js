import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import main from '../assets/main.jpeg';
import underline from '../assets/underline.png';

function Home() {
  return (
    <Main>
      <HomeWrapper>
        <HomeBlock>
          <HomeTitle>Lorem Ipsum</HomeTitle>
          <HomeSubtitle>
            Etiam scelerisque scelerisque est. Ut sed porttitor lectus.{' '}
          </HomeSubtitle>
          <HomeDivider src={underline} alt='underline'/>
          <Link to='/shop'>
            <HomeButton>Shop now</HomeButton>
          </Link>
        </HomeBlock>
        <HomeImage src={main} />
      </HomeWrapper>
    </Main>
  );
}

export default Home;

/* Styles */

const Main = styled.main`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px;
`;

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 120px;
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

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
`;

const HomeTitle = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 5px;
  margin-bottom: 30px;
`;

const HomeSubtitle = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const HomeDivider = styled.img`
  width: 250px;
  margin-bottom: 30px;
`;

const HomeButton = styled.button`
  background-color: #000000;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
  width: 300px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

const HomeImage = styled.img`
  border-radius: 50px;
  width: 700px;
`;

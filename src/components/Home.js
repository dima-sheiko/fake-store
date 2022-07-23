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

  @media (max-width: 1070px) {
    padding: 20px;
  }
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

  @media (max-width: 1400px) {
    justify-content: center;
  }

  @media (max-width: 1070px) {
    flex-direction: column-reverse;
    margin-top: 0px;
  }
`;

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;

  @media (max-width: 1070px) {
    align-items: center;
  }

  @media (max-width: 1070px) {
    margin-top: 30px;
    gap: 20px;
  }

  @media (max-width: 585px) {
    width: 100%;
  }
`;

const HomeTitle = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 5px;
  margin-bottom: 30px;

  @media (max-width: 1400px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
  
  @media (max-width: 585px) {
    font-size: 16px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const HomeSubtitle = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: 1400px) {
    font-size: 35px;
  }

  @media (max-width: 1070px) {
    text-align: center;
  }

  @media (max-width: 585px) {
    font-size: 30px;
  }

  @media (max-width: 393px) {
    font-size: 22px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const HomeDivider = styled.img`
  width: 250px;
  margin-bottom: 30px;

  @media (max-width: 1400px) {
    width: 200px;
  }

  @media (max-width: 1070px) {
    display: none;
  }
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

  @media (max-width: 1400px) {
    font-size: 25px;
    width: 250px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    width: 150px;
  }
`;

const HomeImage = styled.img`
  border-radius: 50px;
  width: 700px;

  @media (max-width: 1400px) {
    width: 550px;
  }

  @media (max-width: 585px) {
    width: 350px;
  }

  @media (max-width: 375px) {
    width: 240px;
  }
`;

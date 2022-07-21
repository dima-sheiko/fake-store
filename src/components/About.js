import React from 'react';
import styled from 'styled-components';
import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';

function About() {
  return (
    <Main>
      <AboutWrapper>
        <Icons>
          <Icon src={github} />
          <Icon src={instagram} />
          <Icon src={facebook} />
          <Icon src={twitter} />
        </Icons>
        <Description>
          <p>FakeStore</p>
          <p>Bikini Bottom, USA</p>
        </Description>
      </AboutWrapper>
    </Main>
  );
}

export default About;

/* Styles */

const Main = styled.main`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  gap: 60px;
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

const Icons = styled.div`
  display: flex;
  gap: 80px;
`;

const Icon = styled.img`
  width: 100px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

const Description = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;



import React from 'react';
import { Main, AboutWrapper, Icons, Icon, Description } from './About.styled';
import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';

/* Logic */

export const About = () => {
  return (
    <Main>
      <AboutWrapper>
        <Icons>
          <Icon src={github} alt='github icon' />
          <Icon src={instagram} alt='instagram icon' />
          <Icon src={facebook} alt='facebook icon' />
          <Icon src={twitter} alt='twitter icon' />
        </Icons>
        <Description>
          <p>FakeStore</p>
          <p>Bikini Bottom, USA</p>
        </Description>
      </AboutWrapper>
    </Main>
  );
};

import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px;
`;

export const AboutWrapper = styled.div`
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

  @media (max-width: 749px) {
    margin-top: 100px;
  }

  @media (max-width: 597px) {
    margin-top: 60px;
  }

  @media (max-width: 375px) {
    margin-top: 40px;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 749px) {
    gap: 60px;
  }

  @media (max-width: 597px) {
    gap: 40px;
  }

  @media (max-width: 375px) {
    gap: 30px;
  }
`;

export const Icon = styled.img`
  width: 100px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  @media (max-width: 749px) {
    width: 80px;
  }

  @media (max-width: 597px) {
    width: 60px;
  }
`;

export const Description = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 749px) {
    font-size: 30px;
  }

  @media (max-width: 597px) {
    font-size: 20px;
  }
`;

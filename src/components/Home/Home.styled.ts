import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px;
`;

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 1400px) {
    justify-content: center;
  }

  @media (max-width: 1070px) {
    margin-top: 0;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: 1070px) {
    align-items: center;
  }

  @media (max-width: 1024px) {
    margin-top: 30px;
    gap: 20px;
  }
`;

export const HomeTitle = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 5px;
  margin-bottom: 30px;

  @media (max-width: 1400px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

export const HomeSubtitle = styled.div`
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
`;

export const HomeDivider = styled.img`
  width: 250px;
  margin-bottom: 30px;

  @media (max-width: 1400px) {
    width: 200px;
  }

  @media (max-width: 1070px) {
    display: none;
  }
`;

export const HomeButton = styled.button`
  background-color: #000000;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
  width: 300px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  @media (max-width: 1400px) {
    font-size: 25px;
    width: 250px;
  }
`;

export const HomeImage = styled.img`
  border-radius: 50px;
  width: 700px;
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
    width: 550px;
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: -1;
    width: 100%;
    opacity: 0.4;
    animation: none;
  }

  @media (max-width: 600px) {
    top: 110px;
  }
`;

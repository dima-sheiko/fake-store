import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
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
    margin-top: 0;
  }
`;

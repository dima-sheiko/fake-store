import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px;
`;

/* Empty Cart */

export const EmptyWrapper = styled.div`
  margin: 0 auto;
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const EmptyCartText = styled.div`
  font-size: 28px;
`;

export const EmptyCartImage = styled.img`
  width: 80px;
`;

/* Regular Cart */

export const CartWrapper = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  padding: 40px;
  border: 1px solid #dad7cd;
  border-radius: 10px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 65px;
`;

export const ItemImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 140px;

  @media (max-width: 526px) {
    width: 120px;
  }

  @media (max-width: 474px) {
    width: 100px;
  }
`;

export const ItemDetails = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 526px) {
    width: 180px;
  }

  @media (max-width: 474px) {
    width: 160px;
  }

  @media (max-width: 420px) {
    width: 140px;
  }

  @media (max-width: 395px) {
    width: 100px;
  }
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ItemButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Button = styled.button`
  background-color: #000000;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const ItemPrice = styled.div`
  font-size: 18px;
`;

export const TotalPrice = styled.div`
  font-size: 30px;
  font-weight: bold;
  align-self: center;

  @media (max-width: 474px) {
    font-size: 25px;
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 20px;
  padding: 15px;
  background-color: #000000;
  color: #fff;
  border-radius: 10px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

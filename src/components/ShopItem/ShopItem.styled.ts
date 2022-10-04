import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #dad7cd;
  border-radius: 10px;
`;

export const ImageWrapper = styled.div`
  height: 190px;
  padding: 10px;
  margin: 0 auto;

  @media (max-width: 375px) {
    height: 170px;
  }
`;

export const ItemImage = styled.img`
  height: 150px;
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
  border-top: 1px solid #dad7cd;
  width: 100%;
  height: 100%;
`;

export const ItemName = styled.p`
  margin-top: 15px;
  font-size: 23px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
`;

export const AddBtn = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #000000;
  color: #fff;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 375px) {
    padding: 13px;
    font-size: 16px;
  }
`;

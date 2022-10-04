import { useState, useEffect } from 'react';
import { Main, ItemsWrapper, Error } from './Shop.styled';
import { ShopItem } from '../ShopItem/ShopItem';
import axios from 'axios';

// Types

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

type ShopProps = {
  onAdd: (product: Product) => void;
};

// Logic

export const Shop = ({ onAdd }: ShopProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<boolean>(false);

  // Effect

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          'https://fakestoreapi.com/products?limit=9'
        );
        setProducts(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Main>
      {error && (
        <Error>
          Something went wrong. <br /> Please try again later.
        </Error>
      )}
      <ItemsWrapper>
        {products.map((product) => (
          <ShopItem key={product.id} product={product} onAdd={onAdd}></ShopItem>
        ))}
      </ItemsWrapper>
    </Main>
  );
};

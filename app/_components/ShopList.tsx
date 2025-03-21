'use client';
import { FC } from 'react';
import { useGetShops } from '../_services/shop';
import ListShopItem from './ListShopItem';

const ShopList: FC = () => {
  const { isPending, isError, data } = useGetShops();
  if (isPending) return 'Loading';
  if (isError) return 'Error';
  return <>{data ? data.map((item) => <ListShopItem key={item.id} data={item} />) : <p>no item</p>}</>;
};

export default ShopList;

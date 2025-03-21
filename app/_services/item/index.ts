// useQuery, useMutationを呼ぶ

import { useQuery } from '@tanstack/react-query';
import { itemKeys } from './keys';
import { getItems, getShopItems } from './functions';
import { getItemsSelector } from './selectors';

export const useGetItems = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: itemKeys.lists(),
    queryFn: getItems,
    select: getItemsSelector,
  });

  return {
    data,
    isPending,
    isError,
  };
};

export const useGetShopItems = (shop: number) => {
  const { data, isPending, isError } = useQuery({
    queryKey: itemKeys.detail(shop),
    queryFn: () => getShopItems(shop),
    select: getItemsSelector,
  });

  return {
    data,
    isPending,
    isError,
  };
};

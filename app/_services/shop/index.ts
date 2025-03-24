// useQuery, useMutationを呼ぶ

import { useQuery } from '@tanstack/react-query';
import { shopKeys } from './keys';
import { getShops, getNearShops } from './functions';
import { getShopsSelector } from './selectors';
import { type Location } from './types';

export const useGetShops = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: shopKeys.lists(),
    queryFn: getShops,
    select: getShopsSelector,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    data,
    isPending,
    isError,
  };
};

export const useGetNearShops = (position: Location) => {
  const { data, isPending, isError } = useQuery({
    queryKey: shopKeys.near(position),
    queryFn: () => getNearShops(position),
    select: getShopsSelector,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    data,
    isPending,
    isError,
  };
};

// useQuery, useMutationを呼ぶ

import { useQuery } from '@tanstack/react-query';
import { shopKeys } from './keys';
import { getShops } from './functions';
import { getShopsSelector } from './selectors';

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

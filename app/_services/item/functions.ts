// queryFn, mutationFnを管理
import { GetItemsResponse } from './types';

export const getItems = async (): Promise<GetItemsResponse> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE + 'items', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
  return response;
};

export const getShopItems = async (shop: number): Promise<GetItemsResponse> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE + 'items/' + shop, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
  return response;
};

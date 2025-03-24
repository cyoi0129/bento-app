// queryFn, mutationFnを管理
import { type GetShopsResponse, type GetShopDetailResponse, type ShopId, type Location } from './types';

export const getShops = async (): Promise<GetShopsResponse> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE + 'shops', {
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

export const getNearShops = async (position: Location): Promise<GetShopsResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/shops_search?position=${position.lat},${position.lng}`, {
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

export const getShopDetail = async (id: number): Promise<GetShopDetailResponse> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE + 'shop/' + id, {
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

export const getShopIds = async (): Promise<ShopId[]> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE + 'shop_ids', {
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
  const result: ShopId[] = [];
  response.data.forEach((item: number) => result.push({ id: String(item) }));
  return result;
};

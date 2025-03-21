// selectオプションに渡すデータ変換関数を管理

import { GetShopsResponse, GetShopDetailResponse, ShopType, DbShopType } from './types';

const convertDbShop = (shop: DbShopType): ShopType => {
  const lat_match = shop.Location.match(/POINT\((.* )/);
  const long_match = shop.Location.match(/ (.* )/);
  const lat = lat_match ? lat_match[0] : '';
  const long = long_match ? long_match[0] : '';
  return {
    id: shop.Id,
    user: shop.User,
    name: shop.Name,
    description: shop.Description,
    image: shop.Image,
    phone: shop.Phone,
    prefecture: shop.Prefecture,
    area: shop.Area,
    address: shop.Address,
    day: shop.Day,
    time: shop.Time,
    payment: shop.Payment,
    feature: shop.Feature,
    lat: lat,
    long: long,
  };
};

export const getShopsSelector = (data: GetShopsResponse): ShopType[] => {
  if (data.status === 0 && data.data) {
    return data.data.map((shop) => convertDbShop(shop));
  } else {
    return [];
  }
};

export const getShopDetailSelector = (data: GetShopDetailResponse): ShopType | null => {
  if (data.status === 0 && data.data) {
    return convertDbShop(data.data);
  } else {
    return null;
  }
};

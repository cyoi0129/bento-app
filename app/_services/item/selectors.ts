// selectオプションに渡すデータ変換関数を管理

import { GetItemsResponse, ItemType, DbItemType } from './types';

const convertDbItem = (item: DbItemType): ItemType => {
  return {
    id: item.Id,
    shop: item.Shop,
    name: item.Name,
    description: item.Description,
    image: item.Image,
    price: item.Price,
    calorie: item.Calorie,
    carbo: item.Carbo,
    protein: item.Protein,
    fat: item.Fat,
    salt: item.Salt,
    fiber: item.Fiber,
  };
};

export const getItemsSelector = (data: GetItemsResponse): ItemType[] => {
  if (data.status === 0 && data.data) {
    return data.data.map((item) => convertDbItem(item));
  } else {
    return [];
  }
};

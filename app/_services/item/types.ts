// Request, Responseの型を管理

export type ItemType = {
  id: number;
  shop: number;
  name: string;
  description: string;
  image: string;
  price: number;
  calorie: number;
  carbo: number;
  protein: number;
  fat: number;
  salt: number;
  fiber: number;
};

export type DbItemType = {
  Id: number;
  Shop: number;
  Name: string;
  Description: string;
  Image: string;
  Price: number;
  Calorie: number;
  Carbo: number;
  Protein: number;
  Fat: number;
  Salt: number;
  Fiber: number;
};

export type GetItemsResponse = {
  data: DbItemType[];
  status: number;
};

// Request, Responseの型を管理

export type ShopType = {
  id: number;
  user: number;
  name: string;
  description: string;
  image: string;
  phone: string;
  prefecture: string;
  area: string;
  address: string;
  day: string[];
  time: string;
  payment: string[];
  feature: string[];
  lat: number;
  lng: number;
};

export type DbShopType = {
  Id: number;
  User: number;
  Name: string;
  Description: string;
  Image: string;
  Phone: string;
  Prefecture: string;
  Area: string;
  Address: string;
  Day: string[];
  Time: string;
  Payment: string[];
  Feature: string[];
  Location: string;
};

export type GetShopsResponse = {
  data: DbShopType[];
  status: number;
};

export type GetShopDetailResponse = {
  data: DbShopType;
  status: number;
};

export type ShopId = {
  id: string;
};

export type Location = {
  lat: number;
  lng: number;
};

export type LocationData = {
  id: number;
  label: string;
  position: Location;
};

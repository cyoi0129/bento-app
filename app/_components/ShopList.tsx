'use client';
import { FC, useState } from 'react';
import { useGetShops } from '../_services/shop';
import ListShopItem from './ListShopItem';
import MapComponent from './MapComponent';
import { type ShopType, type LocationData } from '../_services/shop/types';

const ShopList: FC = () => {
  const [currentShop, setCurrentShop] = useState<number | null>(null);
  const { isPending, isError, data } = useGetShops();
  if (isPending)
    return (
      <div className="overlay">
        <div className="loading">
          <span className="loader"></span>
        </div>
      </div>
    );
  if (isError) return 'Error';

  const getCurrentShopData = (id: number): ShopType | undefined => {
    return data?.find((shop) => shop.id === id);
  };

  const convertMapList = (shops: ShopType[]): LocationData[] => {
    const converShopMapItem = (shop: ShopType): LocationData => {
      return {
        id: shop.id,
        label: shop.name,
        position: {
          lat: shop.lat,
          lng: shop.lng,
        },
      };
    };
    return shops.map((shop) => converShopMapItem(shop));
  };

  const selectShop = (id: number | null) => {
    setCurrentShop(id);
  };

  return (
    <>
      {data ? (
        <>
          <MapComponent data={convertMapList(data)} mapSelect={selectShop} />
          {currentShop ? <ListShopItem key={currentShop} data={getCurrentShopData(currentShop)} /> : null}
          {/* {data.map((item) => (
            <ListShopItem key={item.id} data={item} />
          ))} */}
        </>
      ) : null}
    </>
  );
};

export default ShopList;

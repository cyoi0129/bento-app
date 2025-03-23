'use client';
import { FC, useEffect, useState } from 'react';
import { useGetShops } from '../_services/shop';
import ListShopItem from './ListShopItem';
import MapComponent from './MapComponent';
import Filter from './Filter';
import { MdOutlineMenu, MdClose } from 'react-icons/md';
import { type ShopType, type LocationData } from '../_services/shop/types';

type FilterData = {
  current: string;
  payment: string[];
  feature: string[];
};

const ShopList: FC = () => {
  const [currentShop, setCurrentShop] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [shopList, setShopList] = useState<ShopType[]>([]);
  const { isPending, isError, data } = useGetShops();

  useEffect(() => {
    if (data) {
      setShopList(data);
    }
  }, [data]);

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

  const filterProcess = (filter: FilterData) => {
    setShowFilter(false);
    const shops = data;
    if (filter.current !== '') {
      shops?.filter((shop) => shop.day.includes(filter.current));
    }
    if (filter.payment.length > 0) {
      shops?.filter((shop) => filter.payment.every((item) => shop.payment.includes(item)));
    }
    if (filter.feature.length > 0) {
      shops?.filter((shop) => filter.feature.every((item) => shop.feature.includes(item)));
    }
    if (shops) setShopList(shops);
  };

  return (
    <>
      {shopList.length > 0 ? (
        <>
          <div className="filter_btn" onClick={() => setShowFilter(!showFilter)}>
            {showFilter ? <MdClose /> : <MdOutlineMenu />}
          </div>
          <Filter show={showFilter} doFilter={filterProcess} />
          <MapComponent data={convertMapList(shopList)} mapSelect={selectShop} />
          {currentShop ? <ListShopItem key={currentShop} data={getCurrentShopData(currentShop)} closeShop={selectShop} /> : null}
          {/* {data.map((item) => (
            <ListShopItem key={item.id} data={item} />
          ))} */}
        </>
      ) : null}
    </>
  );
};

export default ShopList;

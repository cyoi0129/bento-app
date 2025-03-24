'use client';
import { FC, useEffect, useState } from 'react';
import { useGetShops } from '../_services/shop';
import ListShopItem from './ListShopItem';
import MapComponent from './MapComponent';
import Filter from './Filter';
import { MdOutlineMenu, MdClose, MdLocationOn } from 'react-icons/md';
import { type ShopType, type LocationData, type Location } from '../_services/shop/types';

type FilterData = {
  current: string;
  payment: string[];
  feature: string[];
};

const ShopList: FC = () => {
  const [currentShop, setCurrentShop] = useState<number | null>(null);
  const [currentPosition, setCurrentPosition] = useState<Location | null>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [shopList, setShopList] = useState<ShopType[]>([]);

  /**
   * 実際では、取得した現在地の座標情報を渡して、useGetNearShopsを使用して特定の位置付近のショップを取得する
   * API側で2件のサンプルデータしか存在しないため、全件取得している
   */
  const { isPending, isError, data } = useGetShops();

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(positionGetSuccessed, positionGetFailed);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const positionGetSuccessed = (position: any) => {
    setCurrentPosition({ lat: Number(position.coords.latitude), lng: Number(position.coords.longitude) });
  };
  const positionGetFailed = () => {
    window.alert('位置情報の取得に失敗しました');
  };

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
    let shops = data;
    if (filter.current !== '') {
      shops = shops?.filter((shop) => shop.day.includes(filter.current));
    }
    if (filter.payment.length > 0) {
      shops = shops?.filter((shop) => filter.payment.every((item) => shop.payment.includes(item)));
    }
    if (filter.feature.length > 0) {
      shops = shops?.filter((shop) => filter.feature.every((item) => shop.feature.includes(item)));
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
          <MapComponent data={convertMapList(shopList)} mapSelect={selectShop} currentLocation={currentPosition} />
          {currentShop ? <ListShopItem key={currentShop} data={getCurrentShopData(currentShop)} closeShop={selectShop} /> : null}
          <div className="location_btn">
            <p onClick={handleLocationClick}>
              <MdLocationOn />
              <span>現在地取得</span>
            </p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ShopList;

'use client';
import { GoogleMap as GoogleMapComponent, Marker } from '@react-google-maps/api';
import { FC, useState, useEffect } from 'react';
import { useMap } from '../_services/useMap';
import { type Location, type LocationData } from '../_services/shop/types';

type MapComponentProps = {
  data: LocationData[];
  mapSelect: (id: number) => void;
};

const MapComponent: FC<MapComponentProps> = (props) => {
  const { data, mapSelect } = props;
  const defaultPosition: Location = {
    lat: 35.60757165862948,
    lng: 139.7346055522518,
  };
  // const [currentPosition, setCurrentPosition] = useState<Location>(defaultPosition);
  const [shopList, setShopList] = useState<LocationData[]>(data);

  // const positionGetSuccessed = (position: any) => {
  //   setCurrentPosition({ lat: Number(position.coords.latitude), lng: Number(position.coords.longitude) });
  // };
  // const positionGetFailed = () => {
  //   window.alert('位置情報の取得に失敗しました');
  // };
  // navigator.geolocation.getCurrentPosition(positionGetSuccessed, positionGetFailed);

  const handleMarkerClick = (id: number) => {
    mapSelect(id);
  };

  const [zoom, setZoom] = useState<number>(17);

  const { isLoaded, onLoad } = useMap({
    defaultPosition,
  });

  const containerStyle = {
    height: '100vh',
    width: '100vw',
  };

  useEffect(() => {
    setShopList(data);
    setZoom(17);
  }, [data]);

  return (
    <>
      {isLoaded ? (
        <GoogleMapComponent zoom={zoom} mapContainerStyle={containerStyle} onLoad={onLoad} center={defaultPosition}>
          {shopList.length > 0 ? shopList.map((shop) => <Marker onClick={() => handleMarkerClick(shop.id)} key={shop.id} position={shop.position} label={shop.label} />) : null}
        </GoogleMapComponent>
      ) : (
        'loading'
      )}
    </>
  );
};

export default MapComponent;

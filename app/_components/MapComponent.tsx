'use client';
import { GoogleMap as GoogleMapComponent, Marker } from '@react-google-maps/api';
import { FC, useState, useEffect } from 'react';
import { useMap } from '../_services/useMap';
import { type Location, type LocationData } from '../_services/shop/types';

type MapComponentProps = {
  data: LocationData[];
  currentLocation: Location | null;
  mapSelect: (id: number | null) => void;
};

const MapComponent: FC<MapComponentProps> = (props) => {
  const defaultPosition: Location = {
    lat: 35.60748658427185,
    lng: 139.73144707317593,
  };
  const { data, mapSelect, currentLocation } = props;
  const [current, setCurrent] = useState<Location>(defaultPosition);
  const [shopList, setShopList] = useState<LocationData[]>(data);
  const handleMarkerClick = (id: number | null) => {
    mapSelect(id);
  };

  const OPTIONS = {
    minZoom: 15,
    maxZoom: 17,
  };

  const { isLoaded, onLoad } = useMap({
    defaultPosition,
  });

  const containerStyle = {
    height: '100vh',
    width: '100vw',
  };

  useEffect(() => {
    setShopList(data);
  }, [data]);

  useEffect(() => {
    if (currentLocation) setCurrent(currentLocation);
  }, [currentLocation]);

  return (
    <>
      {isLoaded ? (
        <GoogleMapComponent options={OPTIONS} mapContainerStyle={containerStyle} onLoad={onLoad} center={current} onClick={() => handleMarkerClick(null)} zoom={17}>
          {shopList.length > 0 ? shopList.map((shop) => <Marker onClick={() => handleMarkerClick(shop.id)} key={shop.id} position={shop.position} label={shop.label} />) : null}
        </GoogleMapComponent>
      ) : (
        'loading'
      )}
    </>
  );
};

export default MapComponent;

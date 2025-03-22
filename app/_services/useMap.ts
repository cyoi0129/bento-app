import { useJsApiLoader } from '@react-google-maps/api';
import { useCallback } from 'react';

export type Map = google.maps.Map;

type Props = {
  defaultPosition: { lat: number; lng: number };
};

export const useMap = ({ defaultPosition }: Props) => {
  // googleMapsApiKeyは自分で取得したものに差し替えてください
  const { isLoaded } = useJsApiLoader({
    id: 'google-map',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  const onLoad = (map: Map) => {
    const bounds = new window.google.maps.LatLngBounds(defaultPosition);
    map.fitBounds(bounds);
  };

  const onUnmount = useCallback(() => {}, []);

  return { isLoaded, onLoad, onUnmount };
};

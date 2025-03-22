'use client';
import { GoogleMap as GoogleMapComponent } from '@react-google-maps/api';
import { FC } from 'react';
import { useMap } from '../_services/useMap';

const Component: FC = () => {
  const defaultPosition = {
    lat: 35.69079374035866,
    lng: 139.76594718293336,
  };

  const { isLoaded, onLoad } = useMap({
    defaultPosition,
  });

  const containerStyle = {
    height: '75vh',
    width: '100vw',
  };

  return <>{isLoaded ? <GoogleMapComponent mapContainerStyle={containerStyle} onLoad={onLoad}></GoogleMapComponent> : 'loading'}</>;
};

export default Component;

// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: 35.69575,
//   lng: 139.77521,
// };

// const MyComponent = () => {
//   return (
//     <LoadScript googleMapsApiKey="API Key">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={17}
//       ></GoogleMap>
//     </LoadScript>
//   );
// };

// export default MyComponent;

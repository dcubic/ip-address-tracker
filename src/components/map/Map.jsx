import { icon } from "leaflet";
import { useRef, useEffect, useState } from 'react';
import markerIcon from '../../assets/images/icon-location.svg';

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const iconProperty = icon({
  iconUrl: markerIcon
});

export default function Map({ipAddressInformation}) {
  const mapRef = useRef();
  const [isValidInfo, setIsValidInfo] = useState(false);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(ipAddressInformation.position, 13);
    }
    if (ipAddressInformation.isp != 'N/A') {
      setIsValidInfo(true);
    } else {
      setIsValidInfo(false);
    }
  }, [ipAddressInformation.isp]);

  console.log(ipAddressInformation);
  return (
    <MapContainer ref={mapRef} center={ipAddressInformation.position} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {isValidInfo && <Marker position={ipAddressInformation.position} icon={iconProperty}></Marker>}
    </MapContainer>
  );
}
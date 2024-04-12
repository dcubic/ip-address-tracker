import Header from './components/header/Header.jsx';
import IpInfo from './components/ip-info/IpInfo.jsx';
import Map from './components/map/Map.jsx';

import { useState } from 'react';

import styles from "./App.module.css";

const initialState = {
  position: [0, 0],
  ipAddress: '127.0.0.16',
  location: 'Place',
  timezone: 'UTC',
  isp: 'Shaw'
};

function App() {
  const [ipAddressInformation, setIpAddressInformation] = useState(initialState);

  return (
    <div className={styles.flexContainer}>
      <Header ipAddressInformation={ipAddressInformation}/>
      <IpInfo ipAddressInformation={ipAddressInformation}/>
      <Map />
    </div>
  );
}

export default App;

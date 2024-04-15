import Header from './components/header/Header.jsx';
import IpInfo from './components/ip-info/IpInfo.jsx';
import Map from './components/map/Map.jsx';

import { useState } from 'react';

import styles from "./App.module.css";

const initialState = {
  position: [0, 0],
  ipAddress: 'N/A',
  location: 'N/A',
  timezone: 'N/A',
  isp: 'N/A'
};

function App() {
  const [ipAddressInformation, setIpAddressInformation] = useState(initialState);

  return (
    <div className={styles.flexContainer}>
      <Header setIpAddressInformation={setIpAddressInformation}/>
      <IpInfo ipAddressInformation={ipAddressInformation}/>
      <Map ipAddressInformation={ipAddressInformation}/>
    </div>
  );
}

export default App;

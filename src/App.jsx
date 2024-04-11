import Header from './components/header/Header.jsx';
// import IpInfo from './components/IpInfoModal.jsx';
import Map from './components/Map';

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
    <div className={styles.background}>
      <Header ipAddressInformation={ipAddressInformation}/>
      {/* <IpInfo /> */}
      <Map />
    </div>
  );
}

export default App;

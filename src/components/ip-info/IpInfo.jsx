import styles from "./IpInfo.module.css";
import InformationBlock from './information_block/InformationBlock.jsx';

export default function IpInfo({ ipAddressInformation }) {
  const keyValuePairs = {
    'Ip Address': ipAddressInformation.ipAddress,
    'Location': ipAddressInformation.location,
    'Timezone': ipAddressInformation.timezone,
    'isp': ipAddressInformation.isp
  }

  const result = Object.entries(keyValuePairs).map(([key, value]) => `${key}, ${value}`);
  // keyValuePairs.map(({key, value}) => `${key}, ${value}`);
  return (
    <div className={styles.container}>
      {Object.entries(keyValuePairs).map(([key, value]) => (<InformationBlock name={key} value={value}/>))}
      {/* <div>
        <h2>IP ADDRESS</h2>
        <p>{ipAddressInformation.ipAddress}</p>
      </div>
      <div>
        <h2>LOCATION</h2>
        <p>{ipAddressInformation.location}</p>
      </div>
      <div>
        <h2>TIMEZONE</h2>
        <p>{ipAddressInformation.timezone}</p>
      </div>
      <div>
        <h2>ISP</h2>
        <p>{ipAddressInformation.isp}</p>
      </div> */}
    </div>
  );
}

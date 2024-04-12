import styles from "./IpInfo.module.css";
import InformationBlock from "./information_block/InformationBlock.jsx";

export default function IpInfo({ ipAddressInformation }) {
  const keyValuePairs = {
    "Ip Address": ipAddressInformation.ipAddress,
    Location: ipAddressInformation.location,
    Timezone: ipAddressInformation.timezone,
    isp: ipAddressInformation.isp,
  };

  const result = Object.entries(keyValuePairs).map(
    ([key, value]) => `${key}, ${value}`
  );
  console.log(result);
  // keyValuePairs.map(({key, value}) => `${key}, ${value}`);
  return (
    <div className={styles.container}>
      {Object.entries(keyValuePairs).map(([key, value]) => (
        <InformationBlock name={key} value={value} />
      ))}
    </div>
  );
}

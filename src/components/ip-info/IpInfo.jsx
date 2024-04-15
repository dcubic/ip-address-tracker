import styles from "./IpInfo.module.css";
import InformationBlock from "./information_block/InformationBlock.jsx";

export default function IpInfo({ ipAddressInformation }) {
  const keyValuePairs = {
    "Ip Address": ipAddressInformation.ipAddress,
    dividerA: "",
    Location: ipAddressInformation.location,
    dividerB: "",
    Timezone: ipAddressInformation.timezone,
    dividerC: "",
    isp: ipAddressInformation.isp,
  };

  return (
    <div className={styles.container}>
      {Object.entries(keyValuePairs).map(([key, value], index) => {
        if (index % 2 === 1) {
          return <div key={index} className={styles.verticalDivider}></div>;
        } else {
          return <InformationBlock key={index} name={key} value={value} />;
        }
      })}
    </div>
  );
}

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
      {/* {Object.entries(keyValuePairs).map(([key, value]) => (
        <InformationBlock name={key} value={value} />
      ))} */}
      {Object.entries(keyValuePairs).map(([key, value], index) => {
        console.log(index);
        if (index % 2 === 1) {
          console.log("Do we get to the odd case?");
          return <div key={index} className={styles.verticalDivider}></div>;
        } else {
          console.log("Do we get to the even case?");
          return <InformationBlock key={index} name={key} value={value} />;
        }
      })}
    </div>
  );
}

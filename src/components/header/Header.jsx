import styles from "./Header.module.css";
import ArrowIcon from "../../assets/images/icon-arrow.svg?react";

import IpInfo from '../ip-info/IpInfo.jsx'

export default function Header({ipAddressInformation}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <fieldset className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className={styles.textInput}
        ></input>
        <button className={styles.submitButton}><ArrowIcon /></button>
      </fieldset>
      <div>
        <IpInfo ipAddressInformation={ipAddressInformation}/>
      </div>
    </div>
  );
}

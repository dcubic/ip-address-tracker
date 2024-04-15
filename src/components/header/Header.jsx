import styles from "./Header.module.css";
import ArrowIcon from "../../assets/images/icon-arrow.svg?react";
import { useRef } from 'react';
import { isIP } from 'is-ip';
import isValidHostname from 'is-valid-hostname';

const webAPIPath = 'https://90cdoqumdb.execute-api.us-east-1.amazonaws.com/retrieveInfo';
const errorState = {
  position: [0, 0],
  ipAddress: 'N/A',
  location: 'N/A',
  timezone: 'N/A',
  isp: 'N/A'
};
export default function Header({setIpAddressInformation}) {
  const inputText = useRef();

  function handleClick() {
    const bodyParameters = {};
    if (isIP(inputText.current.value)) {
      bodyParameters.ipAddress = inputText.current.value;
    } else if (isValidHostname(inputText.current.value)) {
      bodyParameters.domain = inputText.current.value;
    } else {
      setIpAddressInformation(errorState);
      return;
    }

    fetch(webAPIPath, {
      method: 'POST',
      body: JSON.stringify(bodyParameters)
    })
      .then(response => response.json())
      .then(responseData => {
        setIpAddressInformation({
          position: [responseData.location.latitude, responseData.location.longitude], // round? cutoff?
          ipAddress: responseData.ipAddress,
          location: `${responseData.location.city}, ${responseData.location.region} ${responseData.location.postalCode}`,
          timezone: `UTC${responseData.location.timezone}`,
          isp: responseData.isp
        })
      })
      .catch(error => {
        setIpAddressInformation(errorState);
      });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <fieldset className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className={styles.textInput}
          ref={inputText}
        ></input>
        <button className={styles.submitButton} onClick={handleClick}><ArrowIcon /></button>
      </fieldset>
    </div>
  );
}

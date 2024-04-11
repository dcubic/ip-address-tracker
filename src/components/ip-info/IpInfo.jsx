export default function IpInfo({ ipAddressInformation }) {
  return (
    <>
      <div>
          <div>
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
          </div>
        </div>
      {/* {ipAddressInformation.ipAddress && <div>
        <div>
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
        </div>
      </div>}
      {!ipAddressInformation.ipAddress && <></>} */}
    </>
  );
}

import DeviceSharing from "layouts/accountSetting/deviceSharing/DeviceSharing";
import Header from "layouts/header/Header";

import React from "react";

const DeviceSharingPage = () => {
  return (
    <div>
      <Header dashboardPage={true} />
      <DeviceSharing />
    </div>
  );
};
export default DeviceSharingPage;

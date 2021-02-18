import React from "react";
import Loader from "react-loader-spinner";
import Theme from "../../ui/Theme";

export const LoaderThreeDots = () => (
  <Loader
    type='ThreeDots'
    color={Theme.color().accent}
    height={80}
    width={80}
  />
);

import * as React from "react";

import NotificationSvg from "../../../assets/icons/notification.svg";
import { Path, Svg } from "react-native-svg";

const Noti = ({ width = 39.987, height = 42.723, color = "white" }) => (
  <Svg
    id="icons_Q2"
    data-name="icons Q2"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 39.987 42.723"
  >
    <Path
      id="Path_10565"
      data-name="Path 10565"
      d="M43.387,28.713l-3.2-3.12a4.332,4.332,0,0,1-1.2-2.827V16.624c0-7.9-5.4-14.624-15-14.624S9,8.532,9,16.624v6.825a2.5,2.5,0,0,1-.7,1.657L4.6,28.713A1.927,1.927,0,0,0,4,30.078V37.1a1.975,1.975,0,0,0,2,1.95H17.1a7.029,7.029,0,0,0,13.8,0h11.1a1.975,1.975,0,0,0,2-1.95v-7.02A1.927,1.927,0,0,0,43.387,28.713Zm-3.4,6.435H8V30.956l3.1-3.12A6.164,6.164,0,0,0,13,23.449V16.624c0-5.167,2.9-10.724,11-10.724s11,5.752,11,10.724v6.142a8.275,8.275,0,0,0,2.3,5.557l2.7,2.632Z"
      transform="translate(-4 -2)"
      fill={color}
      opacity="0.7"
    />
  </Svg>
);

export default Noti;

import * as React from "react";

import SupportSvg from "../../../assets/icons/support.svg";
import { Path, Svg } from "react-native-svg";

const Support = ({ width = 27, height = 33, color = "white" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
  >
    <Path
      id="Icon_material-headset-mic"
      data-name="Icon material-headset-mic"
      d="M18,1.5A13.5,13.5,0,0,0,4.5,15V25.5A4.494,4.494,0,0,0,9,30h4.5V18h-6V15a10.5,10.5,0,0,1,21,0v3h-6V30h6v1.5H18v3h9A4.494,4.494,0,0,0,31.5,30V15A13.5,13.5,0,0,0,18,1.5Z"
      transform="translate(-4.5 -1.5)"
      fill={color}
      opacity="0.7"
    />
  </Svg>
);

export default Support;

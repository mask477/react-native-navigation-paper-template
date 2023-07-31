import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

const Back = ({ width, height, color }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ? width : "85.238"}
    height={height ? height : "85.757"}
    viewBox="0 0 85.238 85.757"
  >
    <G
      id="Group_41478"
      data-name="Group 41478"
      transform="translate(-171 -362.242)"
    >
      <Circle
        id="Ellipse_6717"
        data-name="Ellipse 6717"
        cx="30"
        cy="30"
        r="30"
        transform="translate(184 375)"
        fill="#fff"
      />
      <Path
        id="Path_10563"
        data-name="Path 10563"
        d="M44.619,2A42.555,42.555,0,1,0,74.812,14.5,42.294,42.294,0,0,0,44.619,2ZM66.7,33.964,39.582,61.25a3.666,3.666,0,0,1-5.424,0l-11.43-11.5a4.307,4.307,0,0,1-.775-5.262,3.86,3.86,0,0,1,6.005-.39l8.911,8.965L61.279,28.507a3.857,3.857,0,0,1,5.064.362A3.916,3.916,0,0,1,66.7,33.964Z"
        transform="translate(169 360.243)"
        fill={color ? color : "#1ac764"}
      />
    </G>
  </Svg>
);
export default Back;

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Back = ({ color }) => (
  <Svg width={118} height={107} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      id="arrow-left-Filled_1_"
      d="M897,2493.5a1.031,1.031,0,0,1-1,1.062H880.414l5.293,5.624a1.109,1.109,0,0,1,0,1.5.958.958,0,0,1-1.414,0l-7-7.437a1.109,1.109,0,0,1,0-1.5l7-7.437a.958.958,0,0,1,1.414,0,1.109,1.109,0,0,1,0,1.5l-5.293,5.624H896A1.032,1.032,0,0,1,897,2493.5Z"
      transform="translate(-867 -2465)"
      fill={color}
    />
  </Svg>
);
export default Back;

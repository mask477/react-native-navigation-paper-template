import * as React from "react";
import MenuSvg from "../../../assets/icons/menu.svg";
import { Path, Svg } from "react-native-svg";

const Menu = ({ width = 20, height = 17, color = "white" }) => (
  // <MenuSvg width={width} height={height} color={color} />
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 17"
  >
    <Path
      id="Icon_ionic-md-menu"
      data-name="Icon ionic-md-menu"
      d="M4.5,26h20V23.167H4.5Zm0-7.083h20V16.083H4.5ZM4.5,9v2.833h20V9Z"
      transform="translate(-4.5 -9)"
      fill={color}
      opacity="0.8"
    />
  </Svg>
);
export default Menu;

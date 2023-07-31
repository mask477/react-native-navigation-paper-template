import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Search = (props) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      id="ico"
      d="M13.821,12.778l4.185,4.185a.737.737,0,1,1-1.043,1.043l-4.185-4.185a6.635,6.635,0,1,1,1.043-1.043ZM8.636,13.8A5.161,5.161,0,1,0,3.475,8.636,5.161,5.161,0,0,0,8.636,13.8Z"
      fill="#131313"
    />
  </Svg>
);
export default Search;

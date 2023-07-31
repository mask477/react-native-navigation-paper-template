import * as React from "react";

import ProfileSvg from "../../../assets/icons/person.svg";

const Profile = ({ width = 40, height = 40, color = "white" }) => (
  <ProfileSvg width={width} height={height} color={color} />
);

export default Profile;

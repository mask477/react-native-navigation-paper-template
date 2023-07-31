import React, { useContext, useRef } from "react";
import { Dimensions, View } from "react-native";
import LottieView from "lottie-react-native";

import Text from "./Text";
import ThemeContext from "../../store/ThemeContext";
import { ANIMATIONS } from "../../utils/styles";

const WindowWidth = Dimensions.get("window").width;

export default function LoadingComponent({ message }) {
  const animation = useRef(null);
  const { themeStyles } = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: themeStyles.bgColor,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "transparent",
          opacity: 0.75,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={ANIMATIONS.loading}
      />
      <Text color={themeStyles.mutedTextColor}>{!!message && message}</Text>
    </View>
  );
}

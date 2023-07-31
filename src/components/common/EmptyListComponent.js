import React, { useContext, useRef } from "react";
import { Dimensions, View } from "react-native";
import LottieView from "lottie-react-native";

import Text from "./Text";
import ThemeContext from "../../store/ThemeContext";
import { ANIMATIONS } from "../../utils/styles";

const WindowWidth = Dimensions.get("window").width;

export default function EmptyListComponent({
  animation = null,
  title = "",
  message = "",
}) {
  const animationRef = useRef(null);
  const { themeStyles } = useContext(ThemeContext);

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          padding: 40,
          width: WindowWidth * 0.8,
          height: WindowWidth * 0.8,
        }}
      >
        <LottieView
          autoPlay
          ref={animationRef}
          style={{
            opacity: animation ? 1 : 0.75,
          }}
          source={animation ? animation : ANIMATIONS.noRecord}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: themeStyles.mutedTextColor,
        }}
      >
        {!!message && message}
      </Text>
    </View>
  );
}

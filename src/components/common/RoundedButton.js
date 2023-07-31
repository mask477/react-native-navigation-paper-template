import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RoundedButton({ icon, onPress, color, style }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 100,
        padding: 5,
        backgroundColor: color,
        ...style,
      }}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
}

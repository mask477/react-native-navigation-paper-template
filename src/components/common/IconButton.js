import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function IconButton({ icon, onPress }) {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
}

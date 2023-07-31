import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import Text from "./Text";
import ThemeContext from "../../store/ThemeContext";

export default ({
  label = null,
  value = "",
  onChangeText,
  onPress,
  autoCapitalize = "none",
  style = {},
  placeHolder = "",
  size = "large",
  rightIcon = null,
  leftIcon = null,
  type = "text",
  keyboardType = "default",
}) => {
  const { themeStyles } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);

  let customContainerStyle = {};
  switch (size) {
    case "small":
      customContainerStyle.height = label ? 50 : 30;
      break;
    case "medium":
      customContainerStyle.height = label ? 60 : 40;
      break;
    case "large":
      customContainerStyle.height = label ? 70 : 50;
      break;
  }

  let isSecureTextEntry = type == "password" && !showPassword;
  let editable = true;

  if (type == "button") {
    editable = false;
  }

  return (
    <Pressable
      disabled={type != "button"}
      style={[styles.container, customContainerStyle, style]}
      onPress={onPress}
    >
      {!!label && <Text style={styles.labelText}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: themeStyles.inputBgColor, height: "100%" },
          themeStyles.shadow,
        ]}
      >
        {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
        <View
          style={{
            flex: 1,
          }}
        >
          <TextInput
            style={[
              styles.input,
              {
                color: themeStyles.textColor,
              },
            ]}
            placeholderTextColor={themeStyles.mutedTextColor}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
            placeholder={placeHolder}
            secureTextEntry={isSecureTextEntry}
            editable={editable}
            keyboardType={keyboardType}
          />
        </View>
        {type == "password" && (
          <Pressable
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color={themeStyles.textColor}
            />
          </Pressable>
        )}
        {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  labelText: {
    textAlign: "left",
    fontWeight: "400",
    marginBottom: 10,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    direction: "row",
    width: "100%",
    fontFamily: "Rubik-Regular",
    paddingHorizontal: 10,
  },
});

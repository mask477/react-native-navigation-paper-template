import {
  View,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { MUTED_TEXT_COLOR, PRIMARY_BG_COLOR } from "../../utils/styles";
import ThemeContext from "../../store/ThemeContext";

export default function CustomModal({
  modalVisible,
  setModalVisible,
  children,
  modalViewStyle,
  centeredViewStyle,
}) {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={[styles.centeredView, centeredViewStyle]}
      >
        <View
          style={[
            styles.modalView,
            modalViewStyle,
            { backgroundColor: themeStyles.bgColor },
          ]}
        >
          {children}
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: WindowWidth,
    height: WindowHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    width: WindowWidth,
    height: WindowHeight,
  },
});

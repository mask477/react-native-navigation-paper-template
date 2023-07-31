import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

import Text from "./Text";
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";
import RoundedButton from "./RoundedButton";

export default function ClubCard({
  data,
  type = "club",
  onPress = () => {},
  onPressAccept = () => {},
  onPressReject = () => {},
}) {
  const {
    id,
    image,
    name,
    city,
    avgRatting,
    totalReview,
    booking = null,
  } = data;

  const { themeStyles } = useContext(ThemeContext);

  const _renderBookingDetails = () => {
    const { host, date, time } = booking;
    return (
      <>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: host.profilePic }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 35,
              marginRight: 10,
            }}
          />
          <View
            style={{
              height: 35,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {host.name}
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>Host</Text>
          </View>
        </View>
        <View style={styles.bookingDateTime}>
          <Text style={[styles.bookingText, styles.labelText]}>
            {booking.date}
          </Text>
          <Text style={[styles.bookingText, styles.labelText]}>
            {booking.time}
          </Text>
        </View>
      </>
    );
  };

  const _renderAcceptRejectButtons = () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RoundedButton
          color="green"
          icon={<Ionicons name="checkmark" size={20} color="white" />}
          style={{ marginRight: 10 }}
          onPress={onPressAccept}
        />
        <RoundedButton
          color="red"
          icon={<Ionicons name="close" size={20} color="white" />}
          onPress={onPressReject}
        />
      </View>
    );
  };

  const _renderRating = () => {
    return (
      <View style={styles.clubRatingContainer}>
        <Ionicons name="star" color={"#F5C60E"} style={{ marginRight: 5 }} />
        <Text style={styles.labelText}>
          {avgRatting.toFixed(1)}({totalReview})
        </Text>
      </View>
    );
  };

  const renderBooking = type == "booking" || type == "request";
  const renderAcceptReject = type == "request";

  return (
    <TouchableOpacity
      key={`club-${id}`}
      style={[
        styles.clubItemContainer,
        { backgroundColor: themeStyles.bgColor },
        themeStyles.shadow,
      ]}
      onPress={onPress}
      disabled={type == "request"}
    >
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.clubImageBg}
      >
        <LinearGradient
          colors={["transparent", "transparent", "rgba(0,0,0,0.8)"]}
          style={styles.clubImageOverlay}
        />

        <View style={styles.bookingDetailsContainer}>
          {renderBooking && _renderBookingDetails()}
        </View>
        <View style={styles.clubContainer}>
          <View style={styles.clubTitleContainer}>
            <Text style={[styles.clubTitle, styles.labelText]}>{name}</Text>
            {/* Location */}
            <View style={styles.clubLocationContainer}>
              <Ionicons
                name="location-outline"
                color={styles.labelText.color}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.labelText}>{city}</Text>
            </View>
          </View>
          <View style={styles.clubDetailsContainer}>
            {/* Rating */}
            {renderAcceptReject
              ? _renderAcceptRejectButtons()
              : _renderRating()}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  clubItemContainer: {
    height: 150,
    display: "flex",
    width: "100%",
    borderRadius: 10,
  },
  clubImageBg: {
    flex: 1,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
  },
  clubImageOverlay: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bookingDetailsContainer: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bookingDateTime: {
    alignItems: "flex-end",
  },
  bookingText: {
    fontSize: 10,
    marginBottom: 10,
  },
  clubContainer: {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  clubTitleContainer: {
    flex: 1,
  },
  clubTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  clubDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clubLocationContainer: {
    display: "flex",
    flexDirection: "row",
  },
  clubRatingContainer: {
    display: "flex",
    flexDirection: "row",
  },
  labelText: {
    color: "white",
  },
});

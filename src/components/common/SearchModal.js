import React, { useContext, useEffect, useState } from "react";
import { View, Pressable, StyleSheet, Image, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Search } from "../../utils/api";
import AuthContext from "../../store/AuthContext";
import ThemeContext from "../../store/ThemeContext";
import ClubContext from "../../store/ClubContext";

import Text from "./Text";
import CustomModal from "./CustomModal";
import TextInput from "./TextInput";
import { PRIMARY_COLOR } from "../../utils/styles";
import EmptyListComponent from "./EmptyListComponent";

let abortToken;

export default function SearchModal({
  modalVisible,
  setModalVisible,
  navigation,
}) {
  const { themeStyles } = useContext(ThemeContext);
  const { auth } = useContext(AuthContext);
  const { setClub } = useContext(ClubContext);
  const { user, token } = auth;

  const [loading, setLoading] = useState(false);
  const [clubs, setClubs] = useState([]);
  const [city, setCity] = useState(2);
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (searchKeyword.trim().length) {
      findClubs();
    }
  }, [searchKeyword]);

  const findClubs = () => {
    setLoading(true);

    if (abortToken) {
      abortToken.abort();
    }

    abortToken = new AbortController();

    const data = {
      city: 2,
      page: page,
      userId: user.id,
      keyword: searchKeyword,
    };

    Search(data, token, abortToken)
      .then((response) => {
        console.log("=== SEARCH:", response.data.length);
        if (response.data) {
          setClubs(response.data);

          if (response.data.length) {
            setPage(page + 1);
          }
        }
      })
      .catch((error) => {
        console.log("SEARCH ERROR CODE:", error.code);
        if (error.code == "ERR_CANCELED") {
          console.log("AXIOS REQUEST CANCELED");
        } else {
          console.error("Search ERROR:", error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onEndReached = () => {
    console.log("onEndReached:", page);
    findClubs();
  };

  const onPressItem = (item) => {
    const { club, amenities } = item;
    setClub({ ...club, amenities: amenities });
    navigation.navigate("ClubStack");
    setModalVisible(!modalVisible);
  };

  const _renderItem = ({ item }) => {
    const { club } = item;
    const { name, image, city } = club;

    return (
      <Pressable onPress={() => onPressItem(item)} style={styles.clubItem}>
        <Image source={{ uri: image }} style={styles.clubItemImage} />
        <View style={styles.clubItemContent}>
          <Text style={styles.clubItemName}>{name}</Text>
          <View style={styles.clubLocationContainer}>
            <Ionicons
              name="location-outline"
              color={themeStyles.mutedTextColor}
              style={{ marginRight: 5 }}
            />
            <Text
              style={[
                styles.clubItemCity,
                { color: themeStyles.mutedTextColor },
              ]}
            >
              {city.name}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <View
        style={[
          styles.header,
          { borderBottomColor: themeStyles.mutedTextColor },
        ]}
      >
        <View
          style={{
            flex: 1,
            marginRight: 10,
          }}
        >
          <TextInput
            style={styles.textInput}
            leftIcon={<Ionicons name="search" color={themeStyles.textColor} />}
            placeHolder="Search"
            size="small"
            value={searchKeyword}
            onChangeText={(text) => setSearchKeyword(text)}
          />
        </View>

        <Pressable
          style={styles.cancelButton}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text>Cancel</Text>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          contentContainerStyle={{ padding: 10 }}
          data={clubs}
          refreshing={loading}
          onRefresh={findClubs}
          keyExtractor={(item, index) => `club-${item.id}-${index}`}
          extraData={searchKeyword}
          renderItem={_renderItem}
          onEndReached={onEndReached}
          ListEmptyComponent={!loading && <EmptyListComponent />}
        />
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 10,
    height: 70,
  },
  cancelButton: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  textInput: {
    marginRight: 10,
  },
  clubItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 5,
    height: 90,
  },
  clubItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
    marginRight: 10,
    backgroundColor: PRIMARY_COLOR,
  },
  clubItemContent: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  clubItemName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  clubLocationContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

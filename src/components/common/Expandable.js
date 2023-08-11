import React, {useContext, useEffect, useState} from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  UIManager,
  View,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons';

import Text from './Text';
import {PRIMARY_LIGHT_BG_COLOR} from '../../utils/styles';
import ThemeContext from '../../store/ThemeContext';

export default function Expandable({
  title,
  subTitle,
  items,
  value = null,
  setSelectedItem,
}) {
  const {themeStyles} = useContext(ThemeContext);

  //Custom Component for the Expandable List
  const [isExpanded, setIsExpanded] = useState(true);
  const [selected, setSelected] = useState(value);
  const [layoutHeight, setLayoutHeight] = useState(0);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  useEffect(() => {
    if (isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isExpanded]);

  useEffect(() => {
    setSelectedItem(selected);
  }, [selected]);

  const onPress = selectedValue => {
    setSelected(selectedValue);
  };

  const _renderItem = (item, index) => {
    const isSelected = item.value == value;
    return (
      <Pressable
        key={index}
        style={[
          styles.listItemContainer,
          {
            borderBottomWidth:
              index < items.length - 1 ? StyleSheet.hairlineWidth : 0,
          },
        ]}
        onPress={() => onPress(item.value)}>
        <View>
          <Text>{item.label}</Text>
        </View>
        <View>
          <Ionicons
            name={isSelected ? 'radio-button-on' : 'radio-button-off'}
            color={
              isSelected ? themeStyles.primaryColor : themeStyles.textColor
            }
            size={20}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View
      style={[
        styles.container,
        themeStyles.shadow,
        {
          backgroundColor: themeStyles.lightBgColor,
        },
      ]}>
      {/*Header of the Expandable List Item*/}
      <Pressable
        activeOpacity={0.8}
        onPress={() => setIsExpanded(!isExpanded)}
        style={[
          styles.header,
          {
            borderBottomWidth: isExpanded ? StyleSheet.hairlineWidth : 0,
          },
        ]}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>
        <View>
          <Ionicons
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            color={themeStyles.textColor}
            size={20}
          />
        </View>
      </Pressable>

      <View
        style={[
          styles.body,
          {
            height: layoutHeight,
          },
        ]}>
        {/*Content under the header of the Expandable List Item*/}
        {items.map((item, key) => _renderItem(item, key))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#808080',
    paddingBottom: 10,
  },
  titleContainer: {},
  titleText: {
    marginBottom: 10,
  },
  subTitleText: {
    fontSize: 10,
  },
  body: {
    overflow: 'hidden',
  },
  listItemContainer: {
    padding: 10,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#808080',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
});

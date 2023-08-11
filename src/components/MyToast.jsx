import React, {useRef, useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';

const MyToast = props => {
  const windowHeight = Dimensions.get('window').height;
  const [status, setStatus] = useState(null);
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

  const successColor = '#6dcf81';
  const successHeader = 'Success!';
  const successMessage = 'You pressed the success button';
  const failColor = '#bf6060';
  const failHeader = 'Error!';
  const failMessage = 'You pressed the fail button';

  useEffect(() => {
    if (props.status != null) {
      setStatus(props.status);
      popIn();
      console.log(props.status);
    }
  }, [popIn, props.status]);

  const popIn = useCallback(() => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.9 * -1,
      duration: 500,
      useNativeDriver: true,
    }).start(popOut());
  }, [popAnim, popOut, windowHeight]);

  const popOut = useCallback(() => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 3000);
  }, [popAnim, windowHeight]);

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View onPress={instantPopOut} style={{zIndex: 100}}>
      <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{translateY: popAnim}],
          },
        ]}>
        <View style={styles.toastRow}>
          <View style={styles.toastText}>
            <Text style={styles.textStyle}>
              {props.status === 'success' ? props.title : props.title}
            </Text>
            <Text style={styles.messageTextStyle}>
              {props.status === 'success' ? props.message : props.message}
            </Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default MyToast;

const styles = StyleSheet.create({
  toastContainer: {
    height: 90,
    width: '100%',
    backgroundColor: 'rgba(57, 55, 66, 0.9)',
    paddingTop: 15,
    alignItems: 'center',
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  toastRow: {
    width: '90%',
    flexDirection: 'row',
  },
  toastText: {
    width: '100%',
  },
  titleTextStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'red',
  },
  messageTextStyle: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
});

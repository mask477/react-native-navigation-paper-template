import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  BackHandler,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Text from '../../components/common/Text';
import TextInput from '../../components/common/TextInput';
import MyToast from '../../components/MyToast';
import ButtonPrimary from '../../components/common/ButtonPrimary';

import {useAuth} from '../../context/AuthContext';
import {useTheme} from '../../context/ThemeContext';
import {APP_NAME} from '../../utils/constants';

function Login({navigation}) {
  const {login, guestLogin} = useAuth();
  const {themeStyles} = useTheme();

  const [toast, setToast] = useState();
  const [toastStatus, setToastStatus] = useState();

  const [txtEmail, setEmail] = useState('app.myskool@gmail.com');
  const [txtPassword, setPassword] = useState('abc123');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailOnChange = enteredText => {
    setEmail(enteredText);
  };

  const handlePasswordOnChange = enteredText => {
    setPassword(enteredText);
  };

  const validateInput = () => {
    if (
      txtEmail == null ||
      txtEmail == '' ||
      txtPassword == null ||
      txtPassword == ''
    ) {
      return false;
    }
    return true;
  };

  const onPressLogin = () => {
    if (validateInput()) {
      setIsLoading(true);
      var data = {
        email: txtEmail,
        password: txtPassword,
        deviceId: 'dvID',
      };

      // login(data)
      //   .then((message) => {
      //     navigation.navigate("AppStack");
      //   })
      //   .catch((error) => {
      //     console.error("UserLogin ERROR:", error);
      //     setToastStatus(Math.floor(Math.random() * 100) + 1);
      //     setToast(error.message);
      //   });
    } else {
      setToastStatus(Math.floor(Math.random() * 100) + 1);
      setToast('Please enter login username & password to continue.');
      setTimeout(() => {
        setToast('');
      }, 3000);
    }
  };

  const onPressSignup = () => {
    navigation.navigate('Signup');
  };

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: themeStyles.bgColor,
        },
      ]}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.headerText}>Login</Text>
      <Text style={styles.subheaderText}>Welcome to {APP_NAME}</Text>

      <View style={styles.controls}>
        <TextInput
          label="Email"
          placeHolder="Please enter your email"
          onChangeText={handleEmailOnChange}
          value={txtEmail}
          style={styles.inpuText}
        />

        <TextInput
          label="Password"
          placeHolder="Please enter your password"
          onChangeText={handlePasswordOnChange}
          value={txtPassword}
          type="password"
          style={styles.inpuText}
        />

        <Text
          onPress={() => {
            navigation.navigate('Forgot');
          }}
          style={styles.forgetPassword}>
          Forget password?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonPrimary
          loading={isLoading}
          onPress={onPressLogin}
          label="Login"
        />
      </View>
      <View style={[styles.bottomArea]}>
        <Text style={styles.labelBottom}>OR</Text>
        <TouchableOpacity onPress={onPressSignup}>
          <Text style={styles.labelBottom}>
            Don't have an account? <Text style={styles.bold}>Signup</Text>
          </Text>
        </TouchableOpacity>
      </View>
      {toast !== '' && (
        <MyToast title="Error" message={toast} status={toastStatus} />
      )}
    </ScrollView>
  );
}

export default Login;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
  },
  mt: {
    marginTop: 40,
  },
  bottomArea: {
    flex: 1.5,
    alignItems: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  bold: {
    fontWeight: '700',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: height * 0.035,
    marginTop: height * 0.08,
  },
  subheaderText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: height * 0.023,
    marginTop: height * 0.015,
  },
  controls: {
    direction: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  inpuText: {
    marginBottom: 20,
  },
  labelBottom: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: height * 0.019,
    marginTop: height * 0.02,
  },
  forgetPassword: {
    textAlign: 'right',
    width: '100%',
    fontSize: height * 0.016,
    fontWeight: 'bold',
    marginBottom: 25,
  },
});

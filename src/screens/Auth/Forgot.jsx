import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {IMAGES, PRIMARY_BG_COLOR, PRIMARY_TEXT_COLOR} from '../../utils/styles';
import TextBox from '../../components/common/TextBox';
import ButtonPrimary from '../../components/common/ButtonPrimary';

function Forgot({navigation}) {
  const [txtEmail, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailOnChange = enteredText => {
    setEmail(enteredText);
  };

  const handleClick = () => {
    console.log('Forgot password...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Text>Back</Text>
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Image
            source={IMAGES.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.controls}>
        <Text style={styles.headerText}>Forgot Password?</Text>
        <Text style={styles.labelText}>Enter Email</Text>
        <TextBox
          placeHolder="Please enter your email"
          onChange={handleEmailOnChange}
        />
        <View style={styles.submitButtonContainer}>
          <ButtonPrimary
            text={'Submit'}
            loading={isLoading}
            handleClick={handleClick}
          />
        </View>
      </View>
    </View>
  );
}

export default Forgot;

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BG_COLOR,
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5,
  },
  back: {
    flex: 0.1,
  },
  logo: {
    flex: 1,
    width: '100%',
    backgroundColor: PRIMARY_BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logoContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  controls: {
    flex: 0.7,
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: height * 0.03,
    color: PRIMARY_TEXT_COLOR,
    marginTop: height * 0.05,
  },
  labelText: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: height * 0.02,
    color: PRIMARY_TEXT_COLOR,
    marginTop: height * 0.02,
  },
  submitButtonContainer: {
    flex: 0.3,
    width: '100%',
    marginTop: 30,
  },
});

import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';

import Text from '../../components/common/Text';
import TextInput from '../../components/common/TextInput';
import {useTheme} from '../../context/ThemeContext';
import ButtonPrimary from '../../components/common/ButtonPrimary';

export default function Signup({navigation}) {
  const {themeStyles} = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {}, []);

  const createUser = () => {
    console.log('createUser');
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: themeStyles.bgColor,
        },
      ]}>
      <ScrollView style={styles.scrollViewContainer}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subTitle}>Create an account</Text>

        {/* Name */}
        <TextInput
          label="Name"
          placeHolder="Please enter your name"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />

        {/* Email */}
        <TextInput
          label="Email"
          placeHolder="Please enter your email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />

        {/* Password */}
        <TextInput
          label="Password"
          placeHolder="Please enter your passowrd"
          onChangeText={text => setPassword(text)}
          value={password}
          style={styles.input}
          type="password"
        />

        <ButtonPrimary label="Continue" onPress={createUser} />
        <ButtonPrimary
          label="Already have an account? Login"
          type={'text'}
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
}

const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 25,
  },
  imagePicker: {
    width: WindowWidth / 3,
    height: WindowWidth / 3,
    borderRadius: WindowWidth / 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    margin: 5,
    marginBottom: 20,
  },
  inputField: {
    height: 50,
    paddingHorizontal: 10,
  },
});

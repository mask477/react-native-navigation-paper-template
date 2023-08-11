import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {useState} from 'react';

function TextBox(props) {
  const [text, setText] = useState('');

  const handleTextOnChange = value => {
    setText(value);
    props.onChange(value);
  };

  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#fff"
        onChangeText={newText => handleTextOnChange(newText)}
        value={text}
        secureTextEntry={props.pw}
        autoCapitalize="none"
        placeholder={props.placeHolder}
      />
    </View>
  );
}

export default TextBox;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 55,
    width: '100%',
  },
  input: {
    flex: 1,
    direction: 'row',
    justifyContent: 'center',
    backgroundColor: '#4C4A57',
    width: '100%',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    fontFamily: 'Rubik-Regular',
  },
});

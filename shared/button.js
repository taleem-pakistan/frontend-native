import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

export default function FlatButton({text, onPressHandler}) {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
        <View style={styles.ImageIconStyle}>
          <Image source={require('../assets/arrow_black.jpg')} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // flexDirection: 'row',
    borderRadius: 36,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#27AE60',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  ImageIconStyle: {
    // padding: 10,
    // margin: 5,
    // width: 1,
    // height: 1,
    // resizeMode: 'stretch',
    // left: 140,
    // bottom: 25,
  },
});

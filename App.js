/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import PageControlIOS from 'react-native-page-control';

import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

import FlatButton from './shared/button';

export default function App() {
  const {landscape} = useDeviceOrientation();
  const dimensions = useDimensions();

  const onPressHandler = () => {
    return console.log('Hello');
  };

  const onPressHandlerImage = () => {
    return console.log('Hello');
  };

  const onPressHandlerButton = () => {
    alert('Button Tapped');
    return console.log('Hello');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          top: landscape ? '20%' : '0%',
          color: '#27AE60',
          fontWeight: 'bold',
          fontSize: 40,
          marginBottom: '20%',
        }}
        onPress={onPressHandler}>
        Taleem Pakistan
      </Text>
      <Text
        style={{
          top: landscape ? '20%' : '0%',
          color: '#000000',
          fontWeight: 'bold',
          // fontSize: 20,
          textAlign: 'center',
          paddingLeft: 120,
          paddingRight: 120,
          marginBottom: '10%',
        }}
        onPress={onPressHandler}>
        One-Stop-Solution for all your Study Material Needs
      </Text>
      <TouchableWithoutFeedback onPress={onPressHandlerImage}>
        <Image
          resizeMode="contain"
          style={{
            width: '100%',
            height: landscape ? '80%' : '39%',
            top: landscape ? '20%' : '0%',
          }}
          source={require('./assets/image_1.jpeg')}
        />
      </TouchableWithoutFeedback>
      <PageControlIOS
        // style={{marginTop: '10%'}}
        numberOfPages={3}
        currentPage={0}
        hidesForSinglePage
        pageIndicatorTintColor="#C4C4C4"
        currentPageIndicatorTintColor="#27AE60"
        indicatorStyle={{borderRadius: 5}}
        currentIndicatorStyle={{borderRadius: 5}}
        indicatorSize={{
          width: landscape ? '10%' : '2%',
          height: landscape ? '11%' : '11%',
        }}
        // onPageIndicatorPress={this.onItemTap}
      />
      <FlatButton text="Start your Taleem" onPress={onPressHandlerButton} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Working on your app!</Text>
      <Image 
      style={{height: 500, width: 500} }
      source={require('./assets/splash.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
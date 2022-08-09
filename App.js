import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import pagesItem from 'assets/components/pagesItem';

export default function App() {
  return (
      <View style={styles.homeContainer}>

          <pagesItem />

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


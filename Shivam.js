import { StatusBar } from 'expo-status-bar';
import React from "react";
import {SafeAreaView, ImageBackground, StyleSheet, Text, View, Button } from "react-native";

const App = () => (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={require("./assets/back.jpg")} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Spots</Text>
    </ImageBackground>
    <Button style={styles.button} title="Get Started" onPress={() => console.log("Button Tapped")}/>
  </SafeAreaView>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "blue",
    fontSize: 42,
    fontWeight: "normal",
    textAlign: "center",
  },
  button:{
    color: "green",
  }
});

export default App;


// export default function App() {
//   console.log("App executed");
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Open up App.js to sttart workinqg qon your app!</Text>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

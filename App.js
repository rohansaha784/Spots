import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

//SPOTS homepage iamge and text written under homeContainer
//DO NOT copy file source while pushing an image also add ./
export default function App() {
  return (
    <Provider store={store}>
    
    <View style={styles.homeContainer}>
    
      <ImageBackground source={require('./assets/Images/road.jpg')}
      
      style={styles.image}
      />

        <View style={styles.homeContainer}>
    
    <View style={styles.titles}>

<Text style={styles.title}>SPOTS</Text>
<Text style={styles.subtitle}>Login Here</Text>

    </View>
      </View>

      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

// First Container for Homepage
homeContainer:{
  width: '100%', 
  height: '100%',
},

//Titles can hold more than one title under the same prefrences
titles: {
  marginTop: '30%',
  width: '100%',
  alignItems: 'center',
},

//Title Text weight and font
title:{
  fontSize: 75,
  fontWeight: '400',
  color: '#FFFFFF',

},

//SubTitle Text weight and font
subtitle:{

  fontSize: 25,
  fontWeight: '300',
  color: '#FFFFFF'
  
},

//HomePage Background Image 
//(Use Position Absolute to push image from the foreground to the background)
//Rezise to cover image (idk how to recenter)
image: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  position: 'absolute',
},

//Buttons WILL BE ADDED HERE they a work in progress 
//I should get them by tuesday

});


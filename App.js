import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

//This is SPOTS homepage and the text will be written under the homeContainer

export default function App() {
  return (
    <Provider store={store}>
    
    <View style={styles.homeContainer}>

      <ImageBackground source={require('./assets/Images/stars.jpg')}
      
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

homeContainer:{
  width: '100%', 
  height: '100%',
},

titles: {
  marginTop: '30%',
  width: '100%',
  alignItems: 'center',
},

title:{
fontSize: 75,
fontWeight: '500',
color: '#FFFFFF',

},

subtitle:{

fontSize: 25,
fontWeight: '300',
color: '#FFFFFF'
  
},

image: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  position: 'absolute',
},



});


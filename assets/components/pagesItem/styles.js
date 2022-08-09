import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
// First Container for Homepage
homeContainer: {
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
  
});

export default styles;
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type; 

//By labeling items as primary and secondary we can create color buttons
    const backgroundColor = type == 'primary' ? 'grey' : 'white';
    const textColor = type == 'primary' ? 'grey' : 'white';
    return (
      <View style={styles.container}>
        <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
          onPress={() => {
            console.warn( 'Hey There')
          }}
        >
        <Text style ={[styles.text, {color: textColor}]}>Sign In</Text>
        </Pressable>
      </View>
    );
  };

  export default StyledButton;

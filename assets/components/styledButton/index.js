import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';


const StyledButton = (props) => {

    const type = props.type; 
    const content = props.content;
    const onPress = props.onPress;


//By labeling items as primary and secondary we can create color buttons
    const backgroundColor = type == 'primary' ? '#1e1e1e' : '#d7d4d4';
    const textColor = type == 'primary' ? '#FFFFFF' : '#171A20';
    return (
      <View style={styles.container}>
        <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
          onPress={() => onPress()}
        >
        <Text style ={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
      </View>
    );
  };

  export default StyledButton;

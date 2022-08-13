import React from 'react';
import {View, Text, ImageBackground, } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const PagesItem = (props) => {
    return (
    <View style={styles.homeContainer}>
    <ImageBackground 
        source={require("../../images/mountain.jpg")}
        style={styles.image} 
        />
    
    <View style={styles.titles}>
        <Text style={styles.title}>SPOTS</Text>
        <Text style={styles.subtitle}>Welcome To Your Next Adventure</Text>
      </View>

<View style={styles.buttonsContainer} >

<StyledButton type= "primary" 
    content={"Log in"}
    onPress={() => {
        console.warn("Log in was pressed");
    }}
/>

<StyledButton type= "secondary" 
    content={"Sign Up"}
    onPress={() => {
        console.warn("Sign Up was pressed");
    }}
/>

</View>

    </View>   
      );
};

export default PagesItem;
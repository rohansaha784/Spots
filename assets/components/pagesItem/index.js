import React from 'react';
import {View, Text, ImageBackground, } from 'react-native';
import styles from './styles';
import StyledButton from '../styledButton';

const pagesItem = (props) => {
    return (
    <View style={styles.homeContainer}>
    <ImageBackground 
        source={require("../../images/roadB.jpg")}
        style={styles.image} 
        />
    
    <View style={styles.titles}>
        <Text style={styles.title}>SPOTS</Text>
        <Text style={styles.subtitle}>Login Here</Text>
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

export default pagesItem;

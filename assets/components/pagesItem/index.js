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

<StyledButton type= "primary"/>
    </View>   
      );
};

export default pagesItem;

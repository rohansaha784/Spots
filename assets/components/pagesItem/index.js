import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';

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
    </View>   
      );
};

export default pagesItem;
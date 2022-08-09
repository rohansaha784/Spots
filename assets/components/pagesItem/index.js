import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const pagesItem = (props) => {
    return (
    <View style={styles.homeContainer}>
    <ImageBackground 
        source={require('../../assets/Images/road.jpg')}
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
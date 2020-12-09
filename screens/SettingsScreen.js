import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class SettingsScreen extends Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>SETTINGS SCREEN</Text>
            </View>
        )
    }
}
    const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        fontWeight: '200',
        paddingBottom: 30,
        color: '#000000',
    }, 
    
}
)
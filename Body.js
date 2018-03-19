import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Body extends Component {
   render() {
      const { number } = this.props
      return (
         <View style={styles.body}>
            <Text style={styles.text}> {number} </Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center'
   },
   text: {
      fontSize: 30,
      fontWeight: 'bold',
   }
})

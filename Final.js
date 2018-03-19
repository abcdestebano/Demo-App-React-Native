import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Final extends Component {
   render() {
      return (
         <View style={styles.blockThree}>
            <Button title="Aumentar" onPress={() => { this.props.suma() }} />
            <Button title="Disminuir" onPress={() => { this.props.resta() }} />
         </View>
      )
   }
}

const styles = StyleSheet.create({
   blockThree: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'
   }
})
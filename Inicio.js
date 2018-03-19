import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Inicio extends Component {
   
   constructor (props) {
      super(props) // Se pasa props como parametro a super para poder utilizar al iniciarlizar una variable en state
      this.state = {
         name: this.props.name
      }
   }

   changeName = () => {
      this.setState({
         name: 'Andres'
      })
   }
   

   render() {
      // const { name, lastName } = this.props
      return (
         <View style={styles.container}>
            <Text style={styles.textFirstName}> { this.state.name } </Text>
            <Text style={styles.textLastName}> { this.props.lastName } </Text>
            <View>
               <Button title="Cambiar nombre" onPress={ this.changeName } />
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'
   },
   textFirstName: {
      fontSize: 30
   },
   textLastName: {
      fontSize: 20
   }
})
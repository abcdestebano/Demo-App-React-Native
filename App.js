import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Inicio from './Inicio';
import Body from './Body';
import Final from './Final';


export default class App extends React.Component {
  constructor() {
    super() // Ejecuta constructor del padre
    this.state = { //Inicializar variables de uso o setear si estado
      number: 1
    }
  }

  // Funcion que aumenta el valor de la variable actualizando su estado
  operation = (operation) => {
    console.log('Llega')
    this.setState({ // Actualiza el estado inicial de una variable declarada en el state
      number: (operation == 'suma') ? this.state.number + 1 : this.state.number - 1
    })
  }

  render() {
    //Elementos para renderizar o vista a renderizar
    return (
      <View style={styles.container}>
        <Inicio name="Esteban" lastName="Aragon" />
        <Body number={this.state.number} />
        <Final suma={ () => { this.operation('suma') } } resta={ () => { this.operation('resta') } } />
      </View>
    );
  }
}


// Estilos de cada uno de los elementos de la vista
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

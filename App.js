/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';
import { AppRegistry, TextInput } from 'react-native';



const instructions = Platform.select({
  ios: 'Maalesef uygulamamamız Apple Store\'da bulunmamaktadır.',
  android:
    'Uygulamamız yakın zamanda full sürümüyle Google Play\' de yerini alacaktır.',
});

export default class App extends Component {
  constructor(probs){
    super(probs);
    this.state = {text : ''};
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./logo.jpg')}
        />
        <Text style={styles.welcome}>ABC_Mirror'a Hoşgeldiniz!</Text>
        <Text style={styles.schoolNoInstructions}>Başlamak için,
        aşağıda bulunan bölmeye okul numaranızı giriniz:</Text>
        <TextInput
        keyboardType= 'numeric'
        maxLength = {9}
        style={styles.schoolNo}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Text style={styles.info}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding : 10,
  },
  logo:{
    width : 300,
    height : 300,
    marginBottom : 15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  schoolNoInstructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  schoolNo: {
    textAlign: 'center',
    width : '80%',
    color: '#333223',
    backgroundColor : '#e1e1ea',
    margin: 15,
  },
  info: {
    borderWidth : 1,
    borderRadius : 0.4,
    borderColor: '#e1e1ea',
    textAlign: 'center',
    color: '#333333',
    marginTop: 15,
  },
});

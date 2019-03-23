


import React from 'react';
import {Platform, StyleSheet, Text, Button, Image, View, FlatList, TextInput, AppRegistry} from 'react-native';

const inputInstructions = 'Başlamak için, aşağıda bulunan bölmeye okul numaranızı giriniz:';
const instructions = Platform.select({
  ios: 'Maalesef uygulamamamız Apple Store\'da bulunmamaktadır.',
  android:
    'Uygulamamız yakın zamanda full sürümüyle Google Play\' de yerini alacaktır.',
});


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Page',
  };
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>ABC Mirror'a Hoşgeldiniz!</Text>
        <Text style={styles.inputInstructions}>{inputInstructions}</Text>
        <Button 
          style = {styles.module_button} 
          title="Dummy Screen"
          color = "#b8c7e0"
          onPress={() => {
            this.props.navigation.navigate('Dummy');
          }}
        />
        <Button
          style = {styles.module_button} 
          title="SchoolNo"
          color = "#b8c7e0"
          onPress={() => {
            this.props.navigation.navigate('SchoolNo');
          }}
        />
       <Button
          style = {styles.module_button} 
          title="Photo Page"
          color = "#b8c7e0"
          onPress={() => {
            this.props.navigation.navigate('Photo');
          }}
       />
       <Button
          style = {styles.module_button} 
          title="Calendar Page"
          color = "#b8c7e0"
          onPress={() => {
          this.props.navigation.navigate('Calendar');
        }}
       />
       <Text style={styles.info}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding : 10,
  },
  inputInstructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 15,
    marginBottom: 30,
  },
  logo:{
    width : 200,
    height : 200,
    marginBottom : 15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  schoolNo: {
    textAlign: 'center',
    width : '80%',
    color: '#333223',
    backgroundColor : '#e1e1ea',
    margin: 15,
  },
  button: {
    textAlign: 'center',
    width : '80%',
    color: '#e1e1ea',
    margin: 5,
  },
  module_button: {
    textAlign: 'center',
    width : '80%',
    color: '#841584',
    margin: 15,
  },
  flatlist: {
    paddingHorizontal : 70,
    margin : 15,
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
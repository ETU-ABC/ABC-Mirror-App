import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button, Image, View} from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import axios from 'axios';

const username = 'Unknown User.';

export default class App extends Component {
  constructor(probs){
    super(probs);
    this.state = {text : ''};
  }
  
  sendNoToServer = () => {
    axios.post(`https://d7iu8b01pa.execute-api.eu-central-1.amazonaws.com/develop/try`, { 
      "school_no" : this.state.text
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
    }).catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./logo.jpg')}
        />
        <Text style={styles.welcome}>Hoşgeldin {username}!</Text>
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
  inputInstructions: {
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
  button: {
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

import React from 'react';
import {StyleSheet, Button, TextInput, Text, View, ScrollView} from 'react-native';
import axios from 'axios';

export default class WeatherScreen extends React.Component {
  static navigationOptions = {
    title: 'Weather Page',
  };
  constructor(probs){
    super(probs);
    this.state = {text : ''};
    this.host = 'http://10.5.43.212:8080';
    this.url =  this.host + '/edit?module=currentweather';
  }

  // the most horrible way to do this
  cityDict = {
      'Ankara': 323786,
      'Istanbul': 745044,
      'İstanbul': 745044,
      'Malatya': 304919,
      'Antalya':323776 ,
      'Bursa': 750268,
      'Eskişehir': 315201,
      'Eskisehir': 315201
  };

  sendRequest = () => {
    axios.post( this.url, {
        "content": {
            "locationID": this.cityDict[this.state.text]
        }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.welcome}>
            Enter the city name for weather
        </Text>
        <TextInput
          style={styles.schoolNo}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          style={styles.module_button}
          onPress={this.sendRequest}
          title="Update"
          color = "#bfffc4"
          accessibilityLabel="Update weather"
        />
        <Text style={styles.info}>
          Enter the city name for updating weather info in the mirror
        </Text>

        </ScrollView>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  module_button: {
    textAlign: 'center',
    width : '80%',
    color: '#841584',
    margin: 15,
  },
  schoolNo: {
    textAlign: 'center',
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
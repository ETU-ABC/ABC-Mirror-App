import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button, Image, View, FlatList} from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import axios from 'axios';
import { Navigation } from 'react-native-navigation';

Navigation.registerComponent(`navigation.playground.App`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "navigation.playground.App"
          }
        }]
      }
    }
  });
});

const inputInstructions = 'Başlamak için, aşağıda bulunan bölmeye okul numaranızı giriniz:';
const instructions = Platform.select({
  ios: 'Maalesef uygulamamamız Apple Store\'da bulunmamaktadır.',
  android:
    'Uygulamamız yakın zamanda full sürümüyle Google Play\' de yerini alacaktır.',
});

export default class App extends Component {
  constructor(probs){
    super(probs);
    this.state = {text : ''};
    this.modules = {
      kind: '',
      data: []
    };
    this.url = 'http://10.5.42.112:8080/edit?module=module_5_ABC-EtuCourseTimetable';
    this.json_url = 'http://10.5.42.112:8080/installed_modules';
  }
  
  postOgrenciNo = () => {
    axios.post(this.url, {
      "ogrenciNo": this.state.text
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getJSON = () => {
    axios.get(this.json_url, {
    })
    .then(function (response) {
      const myObjStr = JSON.stringify(response);
      console.log(myObjStr);
      alert(myObjStr);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log("getJSON function is finished.");
    });  
  
  }


  getJSON2 = () => {
    return fetch(this.json_url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data
          },
          function() {

          }
        );
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./logo.jpg')}
        />
        <Text style={styles.welcome}>ABC_Mirror'a Hoşgeldiniz!</Text>
        <Text style={styles.inputInstructions}>{inputInstructions}</Text>
        <TextInput
          keyboardType= 'numeric'
          maxLength = {9}
          style={styles.schoolNo}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          style ={styles.button} 
          onPress={this.postOgrenciNo}
          title="Gönder"
          color = "#e1e1ea"
          accessibilityLabel="9 haneli okul numaranızı yazdıktan sonra gönderin"
        />
        <Button
          style ={styles.module_button} 
          onPress={this.getJSON2}
          title="Modulleri Al"
          color = "#b8c7e0"
          accessibilityLabel="Yuklenmis modulleri al"
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.name}, {item.symbol}
            </Text>
          )}
          keyExtractor={(item, index) => index}
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
    width : 200,
    height : 200,
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
    color: '#e1e1ea',
    margin: 5,
  },
  module_button: {
    textAlign: 'center',
    width : '80%',
    color: '#841584',
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

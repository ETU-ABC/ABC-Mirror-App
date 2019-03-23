import React from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';
import axios from 'axios';


export default class PhotoScreen extends React.Component {
  static navigationOptions = {
    title: 'Photo Page',
  };
  constructor(probs){
    super(probs);
    this.state = {text : ''};
    this.modules = {
      kind: '',
      data: []
    };
    this.host = 'http://10.5.43.212:8080';
    this.url = this.host+'/take_photo';
  }

  takePic = () => {
    axios.post(this.url, {
      "name": this.state.text
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Photo Screen Sayfasına Hoşgeldiniz!</Text>
        <TextInput
          style={styles.name}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />        
        <Button
          title="Take the Photo"
          onPress={this.takePic}
        />
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
  name: {
    textAlign: 'center',
    width : '80%',
    color: '#333223',
    backgroundColor : '#e1e1ea',
    margin: 15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
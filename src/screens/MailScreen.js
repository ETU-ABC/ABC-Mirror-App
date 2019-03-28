import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';


export default class MailScreen extends React.Component {
  static navigationOptions = {
    title: 'Mail Page',
  };
  url = global.host+'/edit?module=email';

  state = {
    email: "",
    password: "",
    mailserver: "imap.gmail.com",
    port: "993"
  };
  
  email_submit = () => {
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.mailserver);
    console.log(this.state.port);
    axios.post(this.url, {
      "content": {
        "email": this.state.email,
        "password": this.state.password,
        "mailserver": this.state.mailserver,
        "port": this.state.port
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    

    this.props.navigation.navigate('MailSet', {
      email: this.state.email,
      password: this.state.password,
      mailserver: this.state.mailserver,
      port: this.state.port,
    });
  };


  render() {
    
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>

        <Text>
          Please set your school email and password to see your emails in mirror.
        </Text>
        <Input
          keyboardType= 'email-address'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          style={{height: 50, width: 1.0}}
          placeholder={"Email"}
        />
        
        
        <Input
          keyboardType= 'default'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          textContentType={"password"}
          secureTextEntry={true}
          placeholder={"Password"}
        
        />

        <Input
          keyboardType= 'default'
          onChangeText={(mailserver) => this.setState({mailserver})}
          value={this.state.mailserver}
          style={{height: 50, width: 1.0}}
          placeholder={"Mail Server"}
        />
        <Input
          keyboardType= 'number-pad'
          onChangeText={(port) => this.setState({port})}
          value={this.state.port}
          style={{height: 50, width: 1.0}}
          placeholder={"Port"}
        />
        <Button
          onPress={this.email_submit}
          title="Submit"
        />
      </View>
    );
  }
}
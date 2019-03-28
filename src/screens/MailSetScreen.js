import React from 'react';
import { Button, View, Text } from 'react-native';


export default class MailSetScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Setting mail',
  };
  
  render() {
    const email = this.props.navigation.getParam('email', '');
    const password = this.props.navigation.getParam('password', '');
    const mailserver = this.props.navigation.getParam('mailserver', '');
    const port = this.props.navigation.getParam('port', 995);

    

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Set the email:</Text>
        <Text>{email}</Text>
        <Text>{password[0]}****</Text>
        <Text>{mailserver}</Text>
        <Text>{port}</Text>
      </View>
    );
  }
}
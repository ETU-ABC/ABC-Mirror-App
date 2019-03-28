import React from 'react';
import {StyleSheet, TextInput, Button, View, Text } from 'react-native';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Ayarlar',
  };
  constructor(probs){
    super(probs);
    this.state = {text : ''};
  }

  postIP = () => {
    global.host = 'http://'+this.state.text+':8080';
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.setting}>
            <Text style={styles.setting_info}>Ayna üzerinde bulunan IP adresini girin lütfen.</Text>
            <TextInput
                keyboardType= 'numeric'
                style={styles.ip}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
            <Button
                style ={styles.send_button} 
                onPress={this.postIP}
                title="Gönder"
                color = "#5eff6a"
                accessibilityLabel="Ip'nizi yazdıktan sonra gönderin"
            />
        </View>
        <View style={styles.setting}>
            <Text style={styles.setting_info}>NEW SETTINGS ARE ADDED IN THIS FORMAT....</Text>
        </View>
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
    setting_info: {
      textAlign: 'center',
      margin: 10,
    },
    ip: {
      textAlign: 'center',
      color: '#333223',
      backgroundColor : '#e1e1ea',
      margin: 15,
    },
    send_button: {
      textAlign: 'center',
      width : '80%',
      color: '#e1e1ea',
      margin: 5,
    },
    setting: {
      borderWidth : 1,
      borderRadius : 0.4,
      borderColor: '#e1e1ea',
      textAlign: 'center',
      color: '#333333',
      margin: 20,
    },
  });
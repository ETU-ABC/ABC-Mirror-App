


import React from 'react';
import {Platform, StyleSheet, Text, Button, Image, View, FlatList, TextInput, AppRegistry} from 'react-native';

const inputInstructions = 'Başlamak için aşağıdaki sayfalardan istediğiniz işlemi yapabilirsiniz.';
const instructions = Platform.select({
  ios: 'Maalesef uygulamamamız Apple Store\'da bulunmamaktadır.',
  android:
    'Uygulamamız yakın zamanda full sürümüyle Google Play\' de yerini alacaktır.',
});


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Ana Sayfa',
  };
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>ABC Mirror'a Hoşgeldiniz!</Text>
        <Text style={styles.inputInstructions}>{inputInstructions}</Text>
        <Button
          style = {styles.schoolNo_button} 
          title="Okul Numarası ve Modüller"
          color = "#f4c700"
          onPress={() => {
            this.props.navigation.navigate('SchoolNo');
          }}
        />
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 5,
          }}  
        />
       <Button
          style = {styles.module_button} 
          title="Fotoğrafınızı Ekleyin"
          color = "#fc9300"
          onPress={() => {
            this.props.navigation.navigate('Photo');
          }}
       />
       <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 5,
          }}
        />
       <Button
          style = {styles.module_button} 
          title="Google Calendar"
          color = "#f46146"
          backgroundColor = 'black'
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
  schoolNo_button: {
    textAlign: 'center',
    width : '80%',
    color: '#333333',
    color: '#841584',
    margin: 15,
  },
  photoPage_button: {
    textAlign: 'center',
    width : '80%',
    color: '#841584',
    margin: 15,
  },
  calendar_button: {
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
import React from 'react';
import {StyleSheet, Text, Button, Image, View, FlatList, TextInput, ScrollView} from 'react-native';
import axios from 'axios';

export default class SchoolNoScreen extends React.Component {
  static navigationOptions = {
    title: 'School No Configuration',
  };
  constructor(probs){
    super(probs);
    this.state = {text : '', module: ''};
    this.modules = {
      kind: '',
      data: []
    };
    this.host = 'http://10.5.43.212:8080';
    this.url = this.host+'edit?module=module_5_ABC-EtuCourseTimetable';
    this.json_url = this.host+'/all_modules';
    this.show_url = this.host+'/hide?action=SHOW&module=';
    this.hide_url = this.host+'/hide?action=HIDE&module=';
    this.show_all = this.host+'';
    this.hide_all = this.host+'';
  }

  postOgrenciNo = () => {
    this.tmp_url = this.url;
    axios.post(this.tmp_url, {
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
    this.tmp_url = this.json_url;
    return fetch(this.tmp_url)
      .then(response => {
        console.log(response);
        response.json()
      });;  
  
  }


  getJSON2 = () => {
    this.tmp_url = this.json_url;
    return fetch(this.tmp_url)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {

          }
        );
      });
  }

  show_module(item) {
    this.tmp_url = this.show_url+item.longname
    return fetch(this.tmp_url)
      .then(response => {
        console.log(response);
        response.json()
      });;
  } 

  hide_module(item) {
    this.tmp_url = this.hide_url+item.longname
    return fetch(this.tmp_url)
      .then(response => {
        console.log(response);
        response.json()
    });
  }

  hide_all = () => {
    this.tmp_url = this.hide_all
    return fetch(this.tmp_url)
      .then(response => {
        console.log(response);
        response.json()
    });
  }

  show_all = () => {
    this.tmp_url = this.show_all
    return fetch(this.tmp_url)
      .then(response => {
        console.log(response);
        response.json()
    });
  }

  show_module_by_input = () => {
    this.tmp_url = this.show_url+this.state.module
    return fetch(this.tmp_url)
      .then(response => {
        console.log(response);
        response.json()
    });;
  }

  hide_module_by_input = () => {
    this.tmp_url = this.hide_url+this.state.module
    return fetch(this.tmp_url)
      .then(response => {
        console.log(response);
        response.json()
    });;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Merhabalar Öğrenci!</Text>
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
          title="Modülleri Göster"
          color = "#b8c7e0"
          accessibilityLabel="Yuklenmis modulleri al"
        />
        <FlatList
          style={styles.flatlist}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View>
              <Text>
                {item.name}
              </Text>
              <Button
                style ={styles.show_module} 
                onPress={() => {
                  this.show_module(item)
                }}
                title="Göster"
                color = "#b8c7e0"
                accessibilityLabel="Göster"
              />
              <Button
                style ={styles.show_module} 
                onPress={() => {
                  this.hide_module(item)
                }}
                title="Gizle"
                color = "#c8d7f0"
                accessibilityLabel="Gizle"
              />
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
        <Button
            style ={styles.button} 
            onPress={this.show_module_by_input}
            title="Bütün Modülleri Göster"
            color = "#bfffc4"
            accessibilityLabel="9 haneli okul numaranızı yazdıktan sonra gönderin"
        />
        <Button
            style ={styles.button} 
            onPress={this.hide_module_by_input}
            title="Hiçbir Modülü Gösterme"
            color = "#ffa8a8"
            accessibilityLabel="9 haneli okul numaranızı yazdıktan sonra gönderin"
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
import React from 'react';
import {StyleSheet, Text, Button, Image, View, FlatList, TextInput, ScrollView} from 'react-native';
import axios from 'axios';

export default class SchoolNoScreen extends React.Component {
  static navigationOptions = {
    title: 'Okul Numarası ve Modüller',
  };
  constructor(probs){
    super(probs);
    this.state = {text : ''};
    this.modules = {
      kind: '',
      data: []
    };

    this.course_timetable = global.host+'/edit?module=ABC-EtuCourseTimetable';
    this.exam_timetable = global.host+'/edit?module=ABC-EtuExamTimeTable';
    this.json_url = global.host+'/all_modules';
    this.show_url = global.host+'/hide?action=SHOW&module=';
    this.hide_url = global.host+'/hide?action=HIDE&module=';
    this.show_all = global.host+'/show_all';
    this.hide_all = global.host+'/hide_all';
  }

  postOgrenciNo = () => {
    this.tmp_url = this.course_timetable;
    console.log(this.tmp_url);
    axios.post(this.tmp_url, {
      "content": {
        "ogrenciNo": this.state.text
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.tmp_url = this.exam_timetable;
    axios.post(this.tmp_url, {
      "content": {
        "ogrenciNo": this.state.text
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });  
  };

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
  };

  show_module(item) {
    this.tmp_url = this.show_url + item.longname;
    return fetch(this.tmp_url)
      .then(response => {
        console.log(response);
        response.json()
      });;
  };

  hide_module(item) {
    this.tmp_url = this.hide_url + item.longname;
    return fetch(this.tmp_url)
      .then(response => {
        console.log(response);
        response.json()
    });
  };

  hide_all_func = () => {
    return fetch(this.hide_all)
      .then(response => {
        console.log(response);
    });
  };

  show_all_func = () => {
    return fetch(this.show_all)
      .then(response => {
        console.log(response);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Merhabalar Öğrenci!</Text>
        <Text style={styles.start}>Başlamak için okul numaranı buradan gönderebilirsin.</Text>
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
          accessibilityLabel="Yüklenmis modulleri al"
        />
        <FlatList
          style={styles.flatlist}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{alignItems:'center'}}>
              <Text>
                {item.name}
              </Text>
              <View style={{flexDirection:"row"}}>
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
                <Button
                    style ={styles.show_module}
                    onPress={() => {
                        this.props.navigation.navigate('ModulePos', {
                            module: item.longname,
                        });
                    }}
                    title="Position"
                    color = "#c8d7f0"
                    accessibilityLabel="Position"
                />
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
        <Button
            style ={styles.button} 
            onPress={this.show_all_func}
            title="Bütün Modülleri Göster"
            color = "#5eff6a"
            accessibilityLabel="9 haneli okul numaranızı yazdıktan sonra gönderin"
        />
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 5,
          }}  
        />
        <Button
            style ={styles.button} 
            onPress={this.hide_all_func}
            title="Hiçbir Modülü Gösterme"
            color = "#f74a4a"
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
  start: {
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
    paddingHorizontal : 20,
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
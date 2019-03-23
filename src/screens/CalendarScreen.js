import React from 'react';
import {StyleSheet, Button, TextInput, Text, View, ScrollView} from 'react-native';


export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar Page',
  };
  constructor(probs){
    super(probs);
    this.state = {text : ''};
    this.host = 'http://10.0.2.15:8080';
    this.url =  this.host+'/calendar';
  }

  google_calendar = () => {
    this.tmp_url = this.url+this.state.text;
    axios.post(this.tmp_url, {
      "url": this.state.text
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
        <ScrollView>
        <Text style={styles.welcome}>
            iCal biçimindeki Google Calendar linkini giriniz:
        </Text>
        <TextInput
          style={styles.schoolNo}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          style={styles.module_button}
          onPress={this.google_calendar}
          title="Gönder"
          color = "#bfffc4"
          accessibilityLabel="Google Calendar'ı güncellemek için tıklayın."
        />
        <Text style={styles.info}>
          1) Öncelikle calendar.google.com adresine gidip kendinize bir hesap açınız. 
        </Text>
        <Text style={styles.info}>
          2) Ardından sağ yukarıda bulunan ayarlar ikonuna tıklayarak ayarlara giriniz.
        </Text>
        <Text style={styles.info}>
          3) Ayarlar içinde sol tarafta bulunan 'takvimlerimin ayarları' seçeneğininden kendi isminize tıklayın ve çıkan ekranda en aşağı kaydırın.
        </Text>
        <Text style={styles.info}>  
          4) En altta koyu renk arka planla birlikte bulunan iCal biçiminde gizli adres kısmındaki adresi kopyalayıp yukarıdaki bölmeye kopyalayın ve Gönder'e tıklayın.  
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
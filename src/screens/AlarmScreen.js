import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { CheckBox } from 'react-native-elements'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';


export default class AlarmScreen extends React.Component {
  static navigationOptions = {
    title: 'Alarm Page',
  };
  url = 'http://192.168.3.241:8080/edit?module=module_9_MMM-AlarmClock';

  state = {
    isDateTimePickerVisible: false,
    checkedMonday: false,
    checkedTuesday: false,
    checkedWednesday: false,
    checkedThursday: false,
    checkedFriday: false,
    checkedSaturday: false,
    checkedSunday: false,
  };
  
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  
  _handleDatePicked = (time) => {
    console.log(this.url)

    axios.post(this.url, {
      "content": {
        "time":  time.getHours()+":"+time.getMinutes(),
        "days": {
          "monday" : this.state.checkedMonday ? 1 : 0,
          "tuesday" : this.state.checkedTuesday ? 1 : 0,
          "wednesday" : this.state.checkedWednesday ? 1 : 0,
          "thursday" : this.state.checkedThursday ? 1 : 0,
          "friday" : this.state.checkedFriday ? 1 : 0,
          "saturday" : this.state.checkedSaturday ? 1 : 0,
          "sunday" : this.state.checkedSunday ? 1 : 0

        }
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    /*
    this.props.navigation.navigate('AlarmSet', {
      time: time,
      checkedMonday: this.state.checkedMonday,
      checkedTuesday: this.state.checkedTuesday,
      checkedWednesday: this.state.checkedWednesday,
      checkedThursday: this.state.checkedThursday,
      checkedFriday: this.state.checkedFriday,
      checkedSaturday: this.state.checkedSaturday,
      checkedSunday: this.state.checkedSunday,
    });
    */
    
    //console.log('A date has been picked: ', time);
    this._hideDateTimePicker();
  };


  render() {
    
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>

        
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode="time"
        />
        <Text>
          Please select the days to repeat this alarm.
        </Text>
        <CheckBox
          title='Monday'
          checked={this.state.checkedMonday}
          onPress={() => {
            this.setState({ checkedMonday: !this.state.checkedMonday})
          }}
        />
        <CheckBox
          title='Tuesday'
          checked={this.state.checkedTuesday}
          onPress={() => {
            this.setState({ checkedTuesday: !this.state.checkedTuesday})
          }}
        />
        <CheckBox
          title='Wednesday'
          checked={this.state.checkedWednesday}
          onPress={() => {
            this.setState({ checkedWednesday: !this.state.checkedWednesday})
          }}
        />
        <CheckBox
          title='Thurday'
          checked={this.state.checkedThursday}
          onPress={() => {
            this.setState({ checkedThursday: !this.state.checkedThursday})
          }}
        />
        <CheckBox
          title='Friday'
          checked={this.state.checkedFriday}
          onPress={() => {
            this.setState({ checkedFriday: !this.state.checkedFriday})
          }}
        />
        <CheckBox
          title='Saturday'
          checked={this.state.checkedSaturday}
          onPress={() => {
            this.setState({ checkedSaturday: !this.state.checkedSaturday})
          }}
        />
        <CheckBox
          title='Sunday'
          checked={this.state.checkedSunday}
          onPress={() => {
            this.setState({ checkedSunday: !this.state.checkedSunday})
          }}
        />
        <Button
          icon={
            <Icon
              name="clock"
              size={15}
              color="white"
              type="FontAwesome5"
            />
          }
          onPress={this._showDateTimePicker}
          title="Select time and submit the alarm"
        />
      </View>
    );
  }
}
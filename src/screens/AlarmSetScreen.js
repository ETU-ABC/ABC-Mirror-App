import React from 'react';
import { Button, View, Text } from 'react-native';


export default class AlarmSetScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Setting alarm',
  };
  
  render() {
    const alarmTime = this.props.navigation.getParam('time', '');
    const checkedMonday = this.props.navigation.getParam('checkedMonday', false);
    const checkedTuesday = this.props.navigation.getParam('checkedTuesday', false);
    const checkedWednesday = this.props.navigation.getParam('checkedWednesday', false);
    const checkedThursday = this.props.navigation.getParam('checkedThursday', false);
    const checkedFriday = this.props.navigation.getParam('checkedFriday', false);
    const checkedSaturday = this.props.navigation.getParam('checkedSaturday', false);
    const checkedSunday = this.props.navigation.getParam('checkedSunday', false);

    

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>{alarmTime.getHours()}</Text>
        <Text>{alarmTime.getMinutes()}</Text>
        <Text>{String(checkedMonday)}</Text>
        <Text>{String(checkedTuesday)}</Text>
        <Text>{String(checkedWednesday)}</Text>
        <Text>{String(checkedThursday)}</Text>
        <Text>{String(checkedFriday)}</Text>
        <Text>{String(checkedSaturday)}</Text>
        <Text>{String(checkedSunday)}</Text>
      </View>
    );
  }
}
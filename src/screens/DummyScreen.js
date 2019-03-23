import React from 'react';
import { Button, View, Text } from 'react-native';


export default class DummyScreen extends React.Component {
  static navigationOptions = {
    title: 'Dummy Page',
  };
  constructor(probs){
    super(probs);
    this.state = {text : ''};
    this.host = 'http://10.5.43.212:8080';
    this.url = 'http://10.5.43.212:8080/edit?module=module_5_ABC-EtuCourseTimetable';
    this.json_url = 'http://10.5.43.212:8080/all_modules';
  }
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dummy Screen</Text>
        <Button
          title="Example: Go To Home Page"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Home', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}
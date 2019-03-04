import React from 'react';
import { Button, View, Text } from 'react-native';


export default class DummyScreen extends React.Component {
  static navigationOptions = {
    title: 'Dummy Page',
  };
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
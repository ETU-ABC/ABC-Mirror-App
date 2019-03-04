


import React from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Page',
  };
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }} >
        <Button
          title="Go to Dummy Screen"
          onPress={() => {
            this.props.navigation.navigate('Dummy');
          }}
        />
        <Button
          title="Go to SchoolNo"
          onPress={() => {
            this.props.navigation.navigate('SchoolNo');
          }}
        />
      </View>
    );
  }
}

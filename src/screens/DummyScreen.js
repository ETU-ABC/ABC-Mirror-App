import React from 'react';
import { Button, View, Text } from 'react-native';


export default class DummyScreen extends React.Component {
  static navigationOptions = {
    title: 'Dummy Sayfa',
  };
  constructor(probs){
    super(probs);
    this.state = {text : ''};
    this.url = global.host+'/your_url';
  }
  render() {
    return (
      <View style={styles.container}>
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
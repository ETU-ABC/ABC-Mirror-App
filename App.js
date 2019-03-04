import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import DummyScreen from './src/screens/DummyScreen';
import SchoolNoScreen from './src/screens/SchoolNoScreen';

const AppNavigator = createStackNavigator({
  Home: { 
    screen: HomeScreen,
  },
  Dummy: { 
    screen: DummyScreen, 
  },
  SchoolNo: { 
    screen: SchoolNoScreen, 
  },
});

const App = createAppContainer(AppNavigator);

export default App;
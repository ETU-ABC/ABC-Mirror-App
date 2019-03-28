import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import DummyScreen from './src/screens/DummyScreen';
import SchoolNoScreen from './src/screens/SchoolNoScreen';

import AlarmScreen from './src/screens/AlarmScreen';
import AlarmSetScreen from './src/screens/AlarmSetScreen';
import MailScreen from './src/screens/MailScreen';
import MailSetScreen from './src/screens/MailSetScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import WeatherScreen from "./src/screens/WeatherScreen";

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
  Alarm: { 
    screen: AlarmScreen, 
  },
  AlarmSet: { 
    screen: AlarmSetScreen, 
  },
  Mail: { 
    screen: MailScreen, 
  },
  MailSet: { 
    screen: MailSetScreen, 
  },
  Photo: {
    screen: PhotoScreen,
  },
  Calendar: {
    screen: CalendarScreen
  },
  Weather: {
    screen: WeatherScreen
  }
});

const App = createAppContainer(AppNavigator);

export default App;
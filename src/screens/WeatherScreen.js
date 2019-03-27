import React from 'react';
import {StyleSheet, Button, TextInput, Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class WeatherScreen extends React.Component {
  static navigationOptions = {
    title: 'Weather Page',
  };
  constructor(probs){
    super(probs);
    this.state = {text : ''};
    this.host = 'http://10.5.43.212:8080';
    this.url =  this.host + '/edit?module=currentweather';
  }

  sendRequest = () => {
    axios.post( this.url, {
        "content": {
            "location": this.state.text
        }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.welcome}>
            City name for weather
        </Text>

        <Text style={styles.info}>
          Start typing the city name, select the city you want and press 'Update' button to update weather in the mirror.
        </Text>

            <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                listViewDisplayed='auto'    // true/false/undefined
                fetchDetails={true}
                renderDescription={row => row.description} // custom description render
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    // check details.formatted_address is null?
                    const text = details.formatted_address;
                    this.setState({text});
                }}

                getDefaultValue={() => ''}

                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    // !!! type in key !!!
                    // key: '<super_secret_key>',
                    language: 'en', // language of the results
                    types: '(cities)' // default: 'geocode'
                }}

                styles={{
                    textInputContainer: {
                        width: '100%'
                    },
                    description: {
                        fontWeight: 'bold'
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb'
                    }
                }}

                currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance'
                }}

                GooglePlacesDetailsQuery={{
                    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                    fields: 'formatted_address',
                }}

                // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />

            <Button
                style={styles.module_button}
                onPress={this.sendRequest}
                title="Update"
                color = "#bfffc4"
                accessibilityLabel="Update weather"
            />

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
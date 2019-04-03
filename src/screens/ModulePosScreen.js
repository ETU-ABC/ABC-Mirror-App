import React from 'react';
import {StyleSheet, FlatList, TouchableHighlight, View, Image} from 'react-native';
import axios from 'axios';

export default class ModulePos extends React.Component {
    static navigationOptions = {
        title: 'Module Position',
    };
    constructor(probs){
        super(probs);
        this.state = {text : ''};
        this.url =  global.host + '/position';
        this.positionMapper = {
            1: 'top_left',
            2: 'top_center',
            3: 'top_right',
            5: 'middle_center',
            7: 'bottom_left',
            9: 'bottom_right'
        }
    }

    componentDidMount() {
        var self = this;
        let items = Array.apply(null, Array(9)).map((v, i) => {
            return {
                id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
        });
        self.setState({
            dataSource: items,
            module: this.props.navigation.state.params.module
        });
    }

    sendRequest(itemID) {
        console.log("id", itemID);
        const position = this.positionMapper[itemID];
        console.log("position", position);
        axios.post(this.url, {
            "content": {
                "position": position,
                "module": this.state.module // for now
            }
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
            <View style={styles.MainContainer}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <TouchableHighlight onPress={() => this.sendRequest(item.id + 1)}>
                                <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                            </TouchableHighlight>
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});
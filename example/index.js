/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TextInput,
    View,
    Image
} from 'react-native';

import KioskMode, {KioskMode} from 'react-native-kiosk-mode'

import {
    Actions,
    Router,
    Route,
    Schema,
    Animations,
    TabBar
} from 'react-native-router-flux'

class Example extends Component {
    constructor(a, b) {
        super(a, b)
        this.state = {
            focus: true
        }
    }
    ComponentWillMount() {
        KioskMode.onKioskMode();
    }
    render() {

        return (
            <KioskMode />
        );
    }
}

class main extends Component {
    render() {
        return (
            <Router hideNavBar={true}>
                <Route name="Main" type="reset" component={Example}/>
            </Router>
        )
    }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    image: {
        height: 200
    }
});

AppRegistry.registerComponent('example', () => main);

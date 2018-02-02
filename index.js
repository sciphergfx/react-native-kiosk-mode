import React, {Component} from 'react';

import {NativeModules, View, Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';

const KioskMode = NativeModules.KioskMode
export default KioskMode;

import _ from 'lodash';

export class Immersive extends Component {
    constructor(props, context) {
        super(props, context)
        this.autoKioskMode = _.debounce(KioskMode.autoKioskMode, 200);
    }
    componentWillMount() {
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    _keyboardDidHide() {
        KioskMode.autoKioskMode();
    }

    autoKioskMode() {
        KioskMode.autoKioskMode();
    }

    render() {
        return (this.autoKioskMode() || null);
    }
}

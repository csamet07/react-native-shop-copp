import React from 'react';
import {
    View,
    Text
} from 'react-native';
import LottieView from 'lottie-react-native'
const Error = () => {
    return <LottieView style={{flex: 1}} autoPlay source={require('../../assets/error.json')} />
}

export default Error;
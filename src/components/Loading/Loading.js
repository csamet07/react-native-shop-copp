import React from 'react';
import {
    View,
    Text
} from 'react-native';
import LottieView from 'lottie-react-native'

const Loading = () => {
    return <LottieView source={require('../../assets/loading.json')} autoPlay></LottieView>
}

export default Loading;
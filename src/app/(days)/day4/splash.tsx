import React, {useRef} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Stack} from "expo-router";
import {AnimatedComponent} from "@components/AnimatedComponent";


const Splash = () => {

    return (
        <>
            <Stack.Screen options={{headerShown: false}}/>
            <AnimatedComponent/>
        </>

    );
};


export default Splash

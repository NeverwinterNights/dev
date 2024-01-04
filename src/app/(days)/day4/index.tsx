import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from "expo-router";
import {MarkDown} from "@components/MarkDown";

type DayDetailsPropsType = {}

const description = `
# Animation Splash Screen

`;

const DayDetails = ({}: DayDetailsPropsType) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen options={{title: 'Day 4 Animation'}}/>

            <MarkDown>{description}</MarkDown>
            <Link href={"/day4/animation"} asChild>
                <Button title="Go to Animation"/>
            </Link>
            <Link href={"/day4/splash"} asChild>
                <Button title="Go to Splash"/>
            </Link>
        </SafeAreaView>
    );
};


export default DayDetails

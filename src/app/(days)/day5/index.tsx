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
            <Stack.Screen options={{title: 'Day 5 Maps'}}/>

            <MarkDown>{description}</MarkDown>
            <Link href={"/day5/map"} asChild>
                <Button title="Go to Maps"/>
            </Link>
        </SafeAreaView>
    );
};


export default DayDetails

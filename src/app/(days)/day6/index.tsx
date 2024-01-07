import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {Link, Stack} from "expo-router";
import {MarkDown} from "@components/MarkDown";

type DayDetailsPropsType = {}

const description = `
# Tinder

`;

const DayDetails = ({}: DayDetailsPropsType) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen options={{title: 'Day 6 Tinder'}}/>

            <MarkDown>{description}</MarkDown>
            <Link href={"/day6/tinder"} asChild>
                <Button title="Go to Tinder"/>
            </Link>
        </SafeAreaView>
    );
};


export default DayDetails

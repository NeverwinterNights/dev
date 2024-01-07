import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {Link, Stack} from "expo-router";
import {MarkDown} from "@components/MarkDown";

type DayDetailsPropsType = {}

const description = `
# Audio Voice Recorder

`;

const DayDetails = ({}: DayDetailsPropsType) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen options={{title: 'Day 7 Audio'}}/>

            <MarkDown>{description}</MarkDown>
            <Link href={"/day7/audio"} asChild>
                <Button title="Go to Audio Voice Recorder"/>
            </Link>
        </SafeAreaView>
    );
};


export default DayDetails

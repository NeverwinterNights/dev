import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from "expo-router";

type DayDetailsPropsType = {}

const DayDetails = ({}: DayDetailsPropsType) => {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: 'Day 2 Onboard'}}/>

            <Text>DayDetails2</Text>
            <Link href={"/day2/onboard"} asChild>
                <Button title="Go to Onboard"/>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});


export default DayDetails

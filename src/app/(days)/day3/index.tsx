import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from "expo-router";
import {MarkDown} from "@components/MarkDown";

type DayDetailsPropsType = {}

const description = `
# Markdown
Integrate Markdown content in **React Native**
📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`;

const DayDetails = ({}: DayDetailsPropsType) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen options={{title: 'Day 3 Markdown'}}/>

            <MarkDown>{description}</MarkDown>
            <Link href={"/day3/editor"} asChild>
                <Button title="Go to Editor"/>
            </Link>
        </SafeAreaView>
    );
};


export default DayDetails

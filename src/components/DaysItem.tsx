import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Link} from "expo-router";

type DaysItemPropsType = {
    item: number
}

export function DaysItem({item}: DaysItemPropsType) {
    return (
        <Link href={`/day${item}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{item}</Text>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f9ede3',
        borderRadius: 20,
        aspectRatio: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#9b4521"
    },
    text: {
        color: "#9b4521",
        fontSize: 50,
        fontFamily: "AmaticBold",
    },
});

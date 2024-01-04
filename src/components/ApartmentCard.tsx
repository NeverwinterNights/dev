import React from 'react';
import {Image, StyleSheet, Text, View, ViewStyle} from 'react-native';

type ApartmentCardPropsType = {
    apartment: any
    containerStyle?: ViewStyle
}

export const ApartmentCard = ({apartment, containerStyle = {}}: ApartmentCardPropsType) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image style={styles.image} source={{uri: apartment.image}}/>
            <View style={styles.info}>
                <Text style={styles.text}>{apartment.title}</Text>
                <Text style={styles.description}>
                    Stay at this apartment for an affordable price
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.cost}>$ {apartment.price}</Text>
                    <Text style={styles.stars}>★ {apartment.rating} ({apartment.numberOfStars})</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },

    image: {
        width: 150,
        aspectRatio: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    info: {
        padding: 10,
        flex: 1,
        // justifyContent: "space-between"
    },
    text: {
        fontFamily: "InterBold",
        marginBottom: 10
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "auto"
    },
    cost: {
        fontFamily: 'InterBold',
    },
    stars: {},
    description: {
        color: 'gray',
    },

});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Marker} from "react-native-maps";

type MapMarkerPropsType = {
    item: any
    onMarkerPress: () => void
}

export const MapMarker = ({item, onMarkerPress}: MapMarkerPropsType) => {
    return (
        <Marker onPress={onMarkerPress} coordinate={{latitude: item.latitude, longitude: item.longitude}}>
            <View
                style={{
                    backgroundColor: 'white',
                    padding: 5,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 20,
                }}>
                <Text>$ {item.price}</Text></View>
        </Marker>
    );
};

const styles = StyleSheet.create({
    container: {}
});

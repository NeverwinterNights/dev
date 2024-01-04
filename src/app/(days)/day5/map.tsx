import React, {useCallback, useMemo, useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import {Stack} from "expo-router";
import location from "./../../../../assets/apartment.json"
import {MapMarker} from "@components/MapMarker";
import {ApartmentCard} from "@components/ApartmentCard";
import BottomSheet from '@gorhom/bottom-sheet';


const Map = () => {
    const [selectedApartment, setSelectedApartment] = useState(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const onMarkerPress = (item: any) => {
        setSelectedApartment(item)
    }

    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => [75, '25%', '50%', '90%'], []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <View style={styles.container}>
            <Stack.Screen options={{headerShown: false}}/>
            <MapView region={mapRegion} style={styles.map}>
                {location.map((item) => <MapMarker onMarkerPress={() => onMarkerPress(item)} key={item.id}
                                                   item={item}/>
                )}
            </MapView>
            {selectedApartment && <ApartmentCard containerStyle={styles.wrap} apartment={selectedApartment}/>}
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                // enablePanDownToClose
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.listTitle}>Over {location.length} places</Text>
                    <FlatList contentContainerStyle={{gap: 10, padding: 10}} data={location}
                              renderItem={({item}) => <ApartmentCard apartment={item}/>}/>
                </View>
            </BottomSheet>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        flex: 1
    },
    wrap: {
        position: "absolute",
        bottom: 90,

        left: 10,
        right: 10,
    },
    listTitle: {
        textAlign: 'center',
        fontFamily: 'InterSemi',
        fontSize: 16,
        marginVertical: 5,
        marginBottom: 20,
    },
});


export default Map

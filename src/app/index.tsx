import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, View} from 'react-native';
import {DaysItem} from "@components/DaysItem";


export default function HomeScreen() {


    const days: number[] = new Array(10).fill(null).map((el, index) => index + 1)
    return (
        <View style={styles.container}>
            <FlatList data={days}
                      columnWrapperStyle={styles.column}
                      numColumns={2}
                      contentContainerStyle={styles.content}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => <DaysItem item={item}/>}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    content: {
        gap: 10,
        padding: 10
    },
    column: {
        gap: 10
    },

});

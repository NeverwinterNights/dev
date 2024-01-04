import React, {useRef} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';


const Animation = () => {
    const animation = useRef<LottieView>(null);

    return (
        <View style={styles.container}>
            <LottieView
                ref={animation}
                autoPlay
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                source={require('./../../../../assets/lottie/netflix.json')}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Restart Animation"
                    onPress={() => {
                        animation.current?.reset();
                        animation.current?.play();
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        paddingTop: 20,
    },
});


export default Animation

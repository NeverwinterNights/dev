import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {router, Stack} from "expo-router";
import {FontAwesome5} from '@expo/vector-icons';
import {StatusBar} from "expo-status-bar";
import {GestureDetector, Gesture, Directions} from 'react-native-gesture-handler';
import Animated, {
    FadeIn,
    FadeOut,
    BounceInRight,
    SlideOutLeft,
    BounceOutLeft,
    SlideInRight
} from 'react-native-reanimated';

type OnboardingScreenPropsType = {}

const onboardingSteps = [
    {
        icon: 'snowflake',
        title: 'Welcome #DEVember',
        description: 'Daily React Native tutorials during December',
    },
    {
        icon: 'people-arrows',
        title: 'Learn and grow together',
        description: 'Learn by building 24 projects with React Native and Expo',
    },
    {
        icon: 'book-reader',
        title: 'Education for Children',
        description:
            'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of providing education to every child',
    },
];


const OnboardingScreen = ({}: OnboardingScreenPropsType) => {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    }

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    );

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{headerShown: false}}/>
            <StatusBar style="light"/>
            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((item, index) =>
                    <View key={item.icon}
                          style={[styles.stepIndicator, {backgroundColor: index === screenIndex ? "#CEF202" : "grey"}]}/>
                )}
            </View>
            <GestureDetector gesture={swipes}>
                <View key={screenIndex} style={styles.wrapper}>
                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome5 name={data.icon} color={"#CEF202"} size={150} style={styles.image}/>
                    </Animated.View>
                    <View style={styles.footer}>
                        <Animated.Text
                            entering={SlideInRight}
                            exiting={SlideOutLeft} style={styles.title}>
                            {data.title}
                        </Animated.Text>
                        <Animated.Text
                            entering={SlideInRight.delay(50)}
                            exiting={SlideOutLeft} style={styles.subtitle}>
                            {data.description}
                        </Animated.Text>
                        <View style={styles.buttonsRow}>
                            <Text onPress={endOnboarding} style={styles.buttonText}>
                                Skip
                            </Text>
                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',
    },
    wrapper: {
        padding: 20,
        flex: 1,
    },
    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontFamily: 'InterBlack',
        letterSpacing: 1.3,
        marginVertical: 10,
    },
    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 70,
    },
    subtitle: {
        color: 'gray',
        fontSize: 20,
        fontFamily: 'Inter',
        lineHeight: 28,
    },
    footer: {
        marginTop: 'auto',
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    button: {
        backgroundColor: '#302E38',
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 16,

        padding: 15,
        paddingHorizontal: 25,
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
        marginHorizontal: 15,
    },
    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
});


export default OnboardingScreen

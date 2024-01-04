import {Stack} from 'expo-router';
import {Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts} from "@expo-google-fonts/inter";
import {AmaticSC_400Regular, AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc";
import React, {useEffect, useState} from "react";
// import * as SplashScreen from "expo-splash-screen";
import {AnimatedComponent} from "@components/AnimatedComponent";
import Animated, {FadeIn} from 'react-native-reanimated';

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [appReady, setAppReady] = useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_400Regular,
        InterSemi: Inter_600SemiBold,
        InterBold: Inter_700Bold,
        InterBlack: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold

    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            // SplashScreen.hideAsync();
            setAppReady(true)
        }
    }, [fontsLoaded, fontError]);

    // if (!fontsLoaded && !fontError) {
    // if (!appReady) {
    //     // return null;
    //     return <AnimatedComponent/>
    // }
    const showAnimatedSplash = !appReady || !splashAnimationFinished;
    if (showAnimatedSplash) {
        return (
            <AnimatedComponent
                onAnimationFinish={(isCancelled) => {
                    if (!isCancelled) {
                        setSplashAnimationFinished(true);
                    }
                }}
            />
        );
    }

    return (
        <Animated.View style={{flex: 1}} entering={FadeIn}>
            <Stack>
                <Stack.Screen name="index" options={{title: 'Header Dev'}}/>
            </Stack>
        </Animated.View>
    );
}

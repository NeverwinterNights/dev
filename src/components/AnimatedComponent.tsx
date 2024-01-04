import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from "lottie-react-native";
import Animated, {
    FadeIn,
    FadeOut,
    ZoomIn,
    ZoomOut,
} from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);


export const AnimatedComponent = ({
                                      onAnimationFinish = (isCancelled) => {
                                      },
                                  }: { onAnimationFinish?: (isCancelled: boolean) => void; }) => {
    const animation = useRef<LottieView>(null);

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black"
        }}>
            <AnimatedLottieView
                exiting={ZoomOut}
                ref={animation}
                onAnimationFinish={onAnimationFinish}
                loop={false}
                autoPlay
                style={{
                    width: '80%',
                    maxWidth: 400,
                }}
                source={require('./../../assets/lottie/netflix.json')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

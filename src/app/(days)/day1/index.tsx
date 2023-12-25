import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

type DayDetailsPropsType = {

}

const DayDetails = ({}:DayDetailsPropsType) => {
 return (
       <View style={styles.container}>
           <Stack.Screen options={{ title: 'Day 1' }} />
          <Text>DayDetails1</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {

  }
});


export default DayDetails

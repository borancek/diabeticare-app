import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import EPrescriptionScreen from './screens/EPrescriptionScreen';
import BMICaluclatorScreen from './screens/BMICalculatorScreen';
import Dictionary from './screens/Dictionary';

// Create navigator (responsible for navigation of screens)
const Stack = createNativeStackNavigator();

// define all screens - make sure Login screen is the first in the stack
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options= {{ headerShown: false }} name = "Login" component={LoginScreen} />
        <Stack.Screen options= {{ headerShown: false }} name = "Home" component={HomeScreen} />
        <Stack.Screen options= {{ headerShown: false }} name = "Chat" component={ChatScreen} />
        <Stack.Screen options= {{ headerShown: false }} name = "EPrescription" component={EPrescriptionScreen} />
        <Stack.Screen options= {{ headerShown: false }} name = "BMICalculator" component={BMICaluclatorScreen} />
        <Stack.Screen options= {{ headerShown: false }} name = "Dictionary" component={Dictionary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});

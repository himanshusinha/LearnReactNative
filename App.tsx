import React from 'react';
import Reactotron from "reactotron-react-native";
import { StyleSheet, Text, View } from 'react-native';
import './global.css'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigations/MainStack';
import DrawerStack from './src/navigations/DrawerStack';
const App = () => {
  console.log("Hello React Native")
  return (
      <NavigationContainer>
        <DrawerStack/>
      </NavigationContainer>
   );
};
Reactotron.display({
  name: "KNOCK KNOCK",
  preview: "Who's there?",
  value:"Orange"
  })
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../screens/HomeScreens';
import SettingsScreen from '../screens/SettingsScreen';
import { RootStackParamList } from './RootStackParamList';
import ScreenName from '../constant/ScreenName';

const MainStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.HomeScreen} 
        component={HomeScreens}
        initialParams={{
           title:"Himanshu",
           description:"React Native Developer",
           age:35
        }}
      />
      <Stack.Screen 
        name={ScreenName.Settings}
        component={SettingsScreen}
      />
  
    </Stack.Navigator>
  );
};

export default MainStack;

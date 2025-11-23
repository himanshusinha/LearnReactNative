import { View, Text, Image } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenName from '../constant/ScreenName';
import ChatScreen from '../screens/ChatScreen';
import HelpScreen from '../screens/HelpScreen';
import { DrawerStackParamList } from './DrawerStackParamsList';
import CustomDrawerContent from '../components/CustomDrawerContent'
const DrawerStack = () => {
  const Drawer = createDrawerNavigator<DrawerStackParamList>();

  return (
    <Drawer.Navigator   drawerContent={(props) => <CustomDrawerContent {...props} />} 
      screenOptions={{
        drawerActiveBackgroundColor: "#f2f2f2", 
        drawerActiveTintColor:"black",
        drawerInactiveTintColor:'purple',
        drawerStyle: {
          backgroundColor: "orange", 
          
        },
       
      }}
    >
      <Drawer.Screen
        name={ScreenName.Chat}
        component={ChatScreen}
        options={{
          drawerIcon: ({ color }) => {
            return (
              <Image
                source={require('../assets/images/bubble-chat.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color, 
                }}
              />
            )
          },
          drawerLabel: ({  color }) => (
            <Text style={{ color: color }}>Chat</Text> // Label color changes with focus
          ),
        }}
      />
   <Drawer.Screen
        name={ScreenName.Help}
        component={HelpScreen}
        options={{
          drawerIcon: ({ color }) => {
            return (
              <Image
                source={require('../assets/images/question.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color, 
                }}
              />
            )
          },
          drawerLabel: ({ color }) => (
            <Text style={{ color:color}}>Help</Text> 
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenName from '../constant/ScreenName'
import Home from '../screens/Home'
import SearchScreen from '../screens/SearchScreen'
import AddPostScreen from '../screens/AddPostScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { Image, Text } from 'react-native'
import CustomBottomTabs from '../components/CustomBottomTabs'

const BottomTabStack = () => {
  const Bottom = createBottomTabNavigator()

  return (
    <Bottom.Navigator 
      tabBar={(props) => <CustomBottomTabs {...props} />}
    >
      <Bottom.Screen 
        name={ScreenName.Home} 
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Image 
              source={require('../assets/images/home.png')} 
              style={{ 
                width: 20, 
                height: 20, 
                tintColor: focused ? 'black' : color 
              }} 
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : 'gray' }}>Home</Text> 
          )
        }}
      />
      <Bottom.Screen 
        name={ScreenName.Search} 
        component={SearchScreen}  
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Image 
              source={require('../assets/images/search.png')} 
              style={{ 
                width: 20, 
                height: 20, 
                tintColor: focused ? 'black' : color 
              }} 
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : 'gray' }}>Search</Text> 
          )
        }}
      />
      <Bottom.Screen 
        name={ScreenName.AddPost} 
        component={AddPostScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Image 
              source={require('../assets/images/add.png')} 
              style={{ 
                width: 20, 
                height: 20, 
                tintColor: focused ? 'black' : color 
              }} 
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : 'gray' }}>Add Post</Text> 
          )
        }}
      />
      <Bottom.Screen 
        name={ScreenName.Profile} 
        component={ProfileScreen}  
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Image 
              source={require('../assets/images/user.png')} 
              style={{ 
                width: 20, 
                height: 20, 
                tintColor: focused ? 'black' : color 
              }} 
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : 'gray' }}>Profile</Text> 
          )
        }}
      />
    </Bottom.Navigator>
  )
}

export default BottomTabStack

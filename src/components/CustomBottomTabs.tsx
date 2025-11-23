import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import ScreenName from '../constant/ScreenName' // Assuming you have ScreenName defined

const CustomBottomTabs: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', height: 60, backgroundColor: '#fff' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index

        // Define icons for only 4 screens (Home, Search, AddPost, Profile)
         const icon: { [key in ScreenName]: any } = {
          [ScreenName.Home]: require('../assets/images/home.png'),
          [ScreenName.Search]: require('../assets/images/search.png'),
          [ScreenName.AddPost]: require('../assets/images/add.png'),
          [ScreenName.Profile]: require('../assets/images/user.png'),
          [ScreenName.HomeScreen]: require('../assets/images/home.png'),
          [ScreenName.Chat]: require('../assets/images/chat.png'),
          [ScreenName.Settings]: require('../assets/images/settings.png'),
          [ScreenName.Help]: require('../assets/images/help.png'),
          [ScreenName.SettingsScreen]: require('../assets/images/settingsScreen.png'),
        }

        return (
          <TouchableOpacity 
            key={index}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderTopWidth: isFocused ? 3 : 0, // Add top border for focused tab
              borderTopColor: isFocused ? 'black' : 'transparent', // Set top border color
              paddingBottom: 5, // Optional: Add space for the indicator
            }}
          >
            <Image 
              source={icon[route.name as ScreenName]} 
              style={{
                width: 20,
                height: 20,
                tintColor: isFocused ? 'black' : 'gray',
              }} 
            />
            <Text style={{ 
              color: isFocused ? 'black' : 'gray', 
              fontSize: 12,  // Smaller text size
              padding:5,
              fontWeight: isFocused ? 'bold' : 'normal', // Optional: Bold the focused tab label
            }}>
              {route.name}
            </Text>
            {/* Add a bottom indicator (a small line) for the selected tab */}
            {isFocused && (
              <View style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: 2,
                backgroundColor: 'black',  // Set the color of the indicator
              }} />
            )}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default CustomBottomTabs

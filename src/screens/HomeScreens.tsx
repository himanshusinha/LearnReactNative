import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigations/RootStackParamList';
import ScreenName from '../constant/ScreenName';
import BottomTabStack from '../navigations/BottomTabStack';
 
type Props = NativeStackScreenProps<RootStackParamList>;
const HomeScreens = ({route,navigation}:Props) => {
  return (
    <View>
       <TouchableOpacity style={{justifyContent:'center',alignSelf:'center',marginTop:40,backgroundColor:'#bbb',padding:10}} onPress={()=>{
        navigation.navigate(ScreenName.Settings,{
            title:"Himanshu",
            description:"React Native Developer",
            age:35
        })
    }}>
      <Text>Press Me</Text>
    </TouchableOpacity>

    </View>
  )
}

export default HomeScreens
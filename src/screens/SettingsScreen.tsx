import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigations/RootStackParamList'
import ScreenName from '../constant/ScreenName'

type Props = NativeStackScreenProps<RootStackParamList,ScreenName.Settings>

const SettingsScreen = ({route,navigation}:Props) => {
  return (
    <View>
      <Text>{route.params.title}</Text>
      <Text>{route.params.description}</Text>
      <Text>{route.params.age}</Text>
    </View>
  )
}

export default SettingsScreen
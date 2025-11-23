import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomStackParamsLists } from '../navigations/BottomStackParamsLists'

type Props = NativeStackScreenProps<BottomStackParamsLists>;
const SearchScreen = ({route,navigation}:Props) => {
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen
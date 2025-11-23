import { View, Text } from 'react-native';
import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerStackParamList } from '../navigations/DrawerStackParamsList';  // Import DrawerStackParamList
import ScreenName from '../constant/ScreenName';
import BottomTabStack from '../navigations/BottomTabStack';

type Props = DrawerScreenProps<DrawerStackParamList, ScreenName.Chat>;

const ChatScreen = ({ route, navigation }: Props) => {
  return (
    <View style={{flex:1}}>
      <BottomTabStack/>
    </View>
  );
};

export default ChatScreen;

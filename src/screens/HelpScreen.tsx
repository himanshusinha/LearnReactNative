import { View, Text } from 'react-native';
import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerStackParamList } from '../navigations/DrawerStackParamsList';  // Import DrawerStackParamList
import ScreenName from '../constant/ScreenName';

type Props = DrawerScreenProps<DrawerStackParamList, ScreenName.Help>;

const HelpScreen = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>HelpScreen</Text>
    </View>
  );
};

export default HelpScreen;

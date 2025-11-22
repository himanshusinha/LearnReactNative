import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ScreenName from '../constant/ScreenName';

function CustomDrawerContent(props) {
  const navigation = useNavigation()
  return (
     <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View  >
 <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s",
        }}
        style={{width:80,height:80,alignSelf:'center'}}
        resizeMode="cover"  
      />      </View>
      <Pressable onPress={()=>navigation.navigate(ScreenName.Chat)} style={{flexDirection:'row',marginHorizontal:20,marginTop:20}}>
        <Image source={require('../assets/images/bubble-chat.png')} style={{width:40,height:40}}/>
        <Text style={{alignSelf:'center',marginLeft:10}}>Chat</Text>
      </Pressable>
        <Pressable onPress={()=>navigation.navigate(ScreenName.Help)} style={{flexDirection:'row',marginHorizontal:20,marginVertical:10}}>
        <Image source={require('../assets/images/question.png')} style={{width:40,height:40}}/>
        <Text style={{alignSelf:'center',marginLeft:10}}>Help</Text>
      </Pressable>
     </SafeAreaView>
  );
}

export default CustomDrawerContent;

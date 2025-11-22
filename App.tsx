import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import './global.css'
const App = () => {
  return (
       <View className='flex-1 justify-center  bg-red-500 items-center'>
        <Text className='text-6xl'>App</Text>
      </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

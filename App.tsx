import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ClassComponent from './src/components/ClassComponent';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ClassComponent />
    </SafeAreaView>
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

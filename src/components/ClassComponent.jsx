import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import MyButton from '../components/MyButton';

class ClassComponent extends Component {
  render() {
    return (
      <View>
        <Text>Class Component</Text>
        <MyButton
          title="Click My Class"
          onPress={() => Alert.alert('Class component')}
        />
      </View>
    );
  }
}

export default ClassComponent;

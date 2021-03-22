import React from 'react';
import { View, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CallsTab() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 ,alignItems:'center',justifyContent:'center'}}>
      <Text>You didn't make any calls yet.</Text>
    </View>
  )
}

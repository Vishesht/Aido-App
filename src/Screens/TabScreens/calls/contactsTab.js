import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Images,Colors } from '../../../assets/Colors/colors';

export default function ContactsTab() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1,padding:24  }}>
      <View style={{ flexDirection: 'row', marginTop: hp('4%')}}>
          <Image style={{ height: 25, width: 25, alignSelf: 'center', margin: 5 }} source={Images.search} />
          <TextInput placeholder={"ENTER NAME"} style={{fontSize:20}} />
        </View>
        
        <Text style={{fontSize:20,marginTop:20}}>Ingen Dynamics</Text>
        <View style={{ marginBottom: 15, borderBottomColor: Colors.grey, borderBottomWidth: 1 }}></View>

        <Text style={{fontSize:20, color:Colors.light_green,marginTop:20}}>Share the Aido App</Text>
        <View style={{ marginBottom: 15, borderBottomColor: Colors.grey, borderBottomWidth: 1 }}></View>
        <Text style={{marginTop:2,color:Colors.grey}}>audi usus your phone book to sync contacts</Text>
    </View>
  )
}

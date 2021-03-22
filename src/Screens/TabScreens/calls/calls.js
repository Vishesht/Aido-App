import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../assets/Colors/colors';
import CallsTab from './callsTab';
import ContactsTab from './contactsTab'



export default function CallsHome() {
  const navigation = useNavigation();
  const [is_Click, setStateClick] = useState(false);
  return (

    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 }}>
        <TouchableOpacity onPress={() => setStateClick(false)}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>CALLS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStateClick(true)}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>CONTACTS</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row',}}>
        { is_Click == false ?
          <View style={{ marginBottom: 15, borderBottomColor: Colors.light_green, borderBottomWidth: 1.2,width:wp('50%') }}></View> :
          <View style={{ marginBottom: 15, borderBottomColor: Colors.light_green, borderBottomWidth: 1.2,width:wp('50%'),marginLeft:'50%' }}></View>
        }        
      </View>
      
      {returnTabPage()}
    </View>
  )

  function returnTabPage() {
    if (is_Click == false) {
      return (
        <CallsTab />
      )
    } else {
      return (
        <ContactsTab />
      )
    }
  }
}

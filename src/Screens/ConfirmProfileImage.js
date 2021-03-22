import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Images } from '../assets/Colors/colors';


export default function ConfirmProfileImage(props) {
  const navigation = useNavigation();
  console.log("CONFIRM PROFILE INFO",props.route.params.imageUrl)
  return (
    <View style={{ flex: 1 }}>
      
      <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:24,padding:30,color:Colors.grey}}>Looking good!</Text>
      {/* <Image style={{height:200,width:300}} source={require(props.route.params.imageUrl})} /> */}
    
      <Image
        source={{ uri: props.route.params.imageUrl }}
        style={{ height: hp('60'),marginTop:20 , }}
      />
      <View style={{flexDirection:'row',position:'absolute',bottom:10,padding:20,margin:10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Image style={{height:40,width:40}} source={Images.refresh}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo',{imageUrl:props.route.params.imageUrl})}><Image style={{height:55,width:55,marginLeft:110}} source={Images.tick}/></TouchableOpacity>
      </View>
    </View>
  )
}

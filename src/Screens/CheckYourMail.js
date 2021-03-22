import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors, Images } from '../assets/Colors/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function CheckYourMail() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 ,backgroundColor:Colors.white}}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black, letterSpacing: 1 ,padding: 24,marginTop:20,}}>Check your email</Text>
                <Text style={{ fontSize: 15, letterSpacing: 1, marginTop: 10 }}>An email has been sent to</Text>
            <Text style={{ fontSize: 15, letterSpacing: 1,  }}>abcd@gmail.com. Please check your</Text>
            <Text style={{ fontSize: 15, letterSpacing: 1, }}>Inbox. This may take a few</Text>
            <Text style={{ fontSize: 15, letterSpacing: 1,color:Colors.black }}>minutes</Text>
                
                <Image style={{ height: hp('10%'), width: wp('18%'),marginTop:24 }} source={Images.mail} />
                <Text style={{fontSize:18,color:Colors.black,fontWeight:'bold',marginTop:24 }}>Didn't recieve an email?</Text>
                <Text style={{color:Colors.light_green,marginTop:18,fontSize:14 }}>Use different email</Text>
                <Text style={{color:Colors.light_green,marginTop:14,fontSize:14 }}>Support</Text>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <View style={{
                        alignSelf: 'center',
                        backgroundColor: '#00FA9A',
                        height: 60, width: 320, marginTop: hp('10%'),
                        borderRadius: 30, alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 14, color: 'white',
                            fontWeight: 'bold', letterSpacing: 1
                        }}>COMPLETE</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

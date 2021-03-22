import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, Images } from '../assets/Colors/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function ScanQr() {
    const navigation = useNavigation();
    return (
        
            <View style={{ flex: 1 ,backgroundColor:Colors.white}}>
                <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('CheckYourMail')}>
                <View style={{ alignItems: 'flex-end', padding: 14, }}>
                    <Text style={{ color: Colors.light_green, fontSize: 16, fontWeight: 'bold' }}>SKIP</Text>
                </View>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.grey, letterSpacing: 1 }}>Activate new Aido</Text>
                <Text style={{ fontSize: 15, letterSpacing: 1, marginTop: 10 }}>If you are an owner of aido {'\n'}
            robot you need to activate it by {'\n'}
            scanning QR code</Text>
                <Image style={{ height: hp('55%'), width: wp('100%') }} source={Images.temi_img} />
                <TouchableOpacity onPress={() => navigation.navigate('ScanCamera')}>
                    <View style={{
                        alignSelf: 'center',
                        backgroundColor: '#00FA9A',
                        height: 60, width: 320, marginTop: hp('6%'),
                        borderRadius: 30, alignItems: 'center',
                        justifyContent: 'center',marginBottom:20
                    }}>
                        <Text style={{
                            fontSize: 14, color: 'white',
                            fontWeight: 'bold', letterSpacing: 1
                        }}>SCAN QR</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>  
        </View>
             
    )
}

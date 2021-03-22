import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Images, Colors } from '../../../assets/Colors/colors';

export default function AidoHomeScreen() {
    const navigation = useNavigation();
    return (
        
            <View style={{ flex: 1 ,backgroundColor:Colors.white}}>
                
                <ScrollView>
            
            <View style={{ alignItems: 'center',marginTop:30 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.grey, letterSpacing: 1 }}>Activate new Aido</Text>
                <Text style={{ fontSize: 15, letterSpacing: 1, marginTop: 10 }}>If you are an owner of aido {'\n'}
            robot you need to activate it by {'\n'}
            scanning QR code</Text>
                <Image style={{ height: hp('55%'), width: wp('100%'),marginTop:20 }} source={Images.temi_img} />
                <TouchableOpacity onPress={null}>
                    <View style={{
                        alignSelf: 'center',
                        backgroundColor: '#00FA9A',
                        height: 60, width: 320, marginTop: hp('1%'),
                        borderRadius: 30, alignItems: 'center',
                        justifyContent: 'center'
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

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native';
import Header from '../../assets/header/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera'
import { Images,Colors } from '../../assets/Colors/colors';

export default function ScanCamera() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftButtonIcon={Images.back}
                leftButtonAction={() => navigation.navigate('ScanQr')}
            />
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 18, padding: 20 }}>Activate new Aido</Text>
            <Text style={{ alignSelf: 'center', fontSize: 16, }}>Scan the QR code displayed on your aido</Text>
            <QRCodeScanner
                    onRead={null}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    cameraStyle={{ marginTop: 30, width: Dimensions.get('window').width, alignSelf: 'center', justifyContent: 'center' }}
                />
            <Text style={{color:Colors.light_green,fontWeight:'bold',alignSelf:'center',fontSize:19,}}>Can't find the code?</Text>
        </View>
    )
}

'use strict';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../assets/Colors/colors';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { ScrollView } from 'react-native-gesture-handler';

export default function ScanQrHome() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 ,backgroundColor:Colors.white}}>
            <ScrollView>
            <View style={{ alignSelf: 'center', fontSize: 25, padding: 20, marginTop: 10 }}>
                <Text>Scan the QR code displayed on aido</Text>
                <Text >to activate or in aido center to log in</Text>
            </View>

            
                <QRCodeScanner
                    onRead={null}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    cameraStyle={{height:Dimensions.get('window').width + 60, marginTop: 40, width: Dimensions.get('window').width , alignSelf: 'center', justifyContent: 'center' }}
                // topContent={
                //     <Text style={styles.centerText}>
                //         Go to{' '}
                //         <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.</Text>
                // }
                // bottomContent={
                //     <TouchableOpacity style={styles.buttonTouchable}>
                //         <Text style={styles.buttonText}>OK. Got it!</Text>
                //     </TouchableOpacity>
                // }
                />
            
            </ScrollView>
   
            {/* <Text style={{ color: Colors.light_green, fontWeight: 'bold', alignSelf:'center', fontSize: 19 }}>Can't find the code?</Text> */}

        </View>
    )
}
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Colors, Images } from '../assets/Colors/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function ProfileInfo(props) {
    const navigation = useNavigation();
    console.log("CONFIRM PROFILE IMAGE",props.route.params.imageUrl)
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 20, marginTop: 40 }}>Profile Info</Text>
                    <Text style={{ fontSize: 17 }}>Please provide your name,</Text>
                    <Text style={{ fontSize: 17 }}>email & optional profile photo</Text>
                    <Image style={{ height: 150, width: 150, marginTop: 40,borderRadius:100 }} source={{uri: props.route.params.imageUrl}} />
                </View>
                <View style={{ padding: 24, }}>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Image style={{ height: 24, width: 24, alignSelf: 'center', margin: 5 }} source={Images.username} />
                        <TextInput placeholder={"USERNAME"} style={{ fontSize: 16 }} />
                    </View>
                    <View style={{ marginBottom: 15, borderBottomColor: Colors.light_green, borderBottomWidth: 1 }}></View>

                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Image style={{ height: 24, width: 24, alignSelf: 'center', margin: 5 }} source={Images.email} />
                        <TextInput placeholder={"EMAIL"} style={{ fontSize: 16 }} />
                    </View>
                    <View style={{ marginBottom: 15, borderBottomColor: Colors.light_green, borderBottomWidth: 1 }}></View>
                    <Text style={{ fontWeight: 'bold' }}>Email verification:</Text>
                    <Text style={{color:Colors.grey}}>Confirming your email help us provide another layer of {'\n'}security to your account. In addition, to power your aido {'\n'}
                                        to Alexa we need to verify your amazon email account.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ScanQr')}>
                        <View style={{
                            alignSelf: 'center',
                            backgroundColor: '#00FA9A',
                            height: 60, width: 320, marginTop: hp('6%'),
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
        </ScrollView>
    )
}

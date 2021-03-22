'use strict';
import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/createProfileStyle';
import { Images } from '../assets/Colors/colors';
import { RNCamera } from 'react-native-camera'

export default function LoginScreen() {
  const navigation = useNavigation();
  let cameraRef = useRef(null)

  async function takePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      // CameraRoll.saveToCameraRoll(data.uri);
      console.log(data.uri);
      navigation.navigate('ConfirmProfileImage', { imageUrl: data.uri })
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo',{imageUrl : 'https://s.clipartkey.com/mpngs/s/326-3260960_male-shadow-fill-circle-comments-default-profile-pic.png'})}>
        <View style={styles.headerview}>
          <Text style={styles.headertxt}>SKIP</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.text1}>Create your profile picture</Text>
      <View style={{ height: hp('40') ,backgroundColor:'#000'}}>
        <RNCamera
          style={{flex:1}}
          type={RNCamera.Constants.Type.front}
          ref={cameraRef}
        />
      </View>

      <View style={styles.view2}>
        <Image style={styles.imgstyle} source={Images.gallery} />
        <TouchableOpacity onPress={
          () => takePicture()
          }><Image style={styles.imgstyle} source={Images.camClick} /></TouchableOpacity>
        <TouchableOpacity onPress={null}><Image style={styles.imgstyle} source={Images.cam} /></TouchableOpacity>
      </View>
    </View>
  )
}
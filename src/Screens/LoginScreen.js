import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity,Alert, ActivityIndicator } from 'react-native';
import Header from '../assets/header/Header';
import { Images, Colors } from '../assets/Colors/colors'
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/loginStyle';
import axios from 'axios';

export default function LoginScreen(props) {
  const [number, setText] = useState('');
  //const [name, setName] = useState(props.route.params.name);
  const navigation = useNavigation();
  function POSTApi(){
    axios.post("http://ec2-54-193-125-53.us-west-1.compute.amazonaws.com:3000/app/auth/users", {
        "phone_number": props.route.params.code + number,
      })
        .then((response) => {
          console.log(response);
          console.log(response.data.data.request_id)
          if(response.data.status.code == 200){
            navigation.navigate('VerificationCode',{data: `${props.route.params.code} ${number}`,request_id: response.data.data.request_id});
          }
        }, (error) => {
          console.log("Errorr---",error);
          alert("Error: Request failed with status code 500")
        });
     

}
  function showAlert1() {  
    Alert.alert(  
        'Is this the right number?',  
        `We will be verifying the phone number:\n ${props.route.params.code} ${number}`,  
        [  
            {  
                text: 'Edit',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress:() => POSTApi()},  
        ]  
    );  
}  
  function openPage() {
    if (!number.trim()) {
      alert("Enter the number");
    } else {
      showAlert1()
    }

  }
  return (
    <View style={styles.container}>
      <Header
        leftButtonIcon={Images.back}
        leftButtonAction={() => navigation.goBack()}
      />
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text1}>Verify your phone number</Text>
      </View>
      <View style={{ padding: 25 }}>
        <TouchableOpacity onPress={() => navigation.navigate('CountryCodeList')}><Text style={{ fontSize: 16 }}>
          { "(" + props.route.params.code + ") " + props.route.params.name}
        </Text></TouchableOpacity>

        <View style={styles.line}></View>
        <View style={styles.view1}>
          <Image style={styles.img} source={Images.ph_icon} />
          <TextInput keyboardType = 'numeric' placeholder="Enter Your Number" onChangeText={number => setText(number)} />
        </View>

        <View style={{ marginBottom: 15, borderBottomColor: Colors.black, borderBottomWidth: 1 }}></View>
        <TouchableOpacity onPress={
          () => openPage()
          // () => navigation.navigate('CreateProfile')
        }>
          <View style={styles.viewButton}>
            <Text style={styles.viewButtonText}>SUBMIT</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text2}>We'll never give your number to anyone</Text>

      </View>
    </View>
    //  :
    // <ActivityIndicator style={{alignSelf:'center',}} size="large" color="#0000ff" animating={true} />
  )
}


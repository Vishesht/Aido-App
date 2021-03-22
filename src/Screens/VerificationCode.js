import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Colors, Images } from '../assets/Colors/colors';
import styles from '../Styles/verificationCodeStyle';
import Header from '../assets/header/Header';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VerificationCode(props) {
    const navigation = useNavigation();
    const [codeNumber, setText] = useState('');
    console.log(props.route.params.data);
    console.log("Requestid-------" + props.route.params.request_id);
    console.log(props)
    function POSTApi() {
        if(codeNumber.trim()){
            axios.post("http://ec2-54-193-125-53.us-west-1.compute.amazonaws.com:3000/app/auth/users/verify", {
            "request_id": props.route.params.request_id,
            "code": codeNumber,
            "phone_number": props.route.params.data,

        })
            .then((response) => {
                console.log(response);
                console.log("Access Token -----",response.data.tokens.accessToken);
                console.log("RefreshToken -----",response.data.tokens.refreshToken);
                if (response.data.status.code == 200) {
                    // const firstPair = ["AccessToken", response.data.tokens.accessToken]
                    // const secondPair = ["RefreshToken", response.data.tokens.refreshToken]
                    // try {
                    //     AsyncStorage.multiSet([firstPair, secondPair])
                    //     console.log("Data is successfully stored in the local storage")
                    // } catch (e) {
                    //     //save error   
                    // }
                    navigation.navigate('CreateProfile');
                } 

            }, (error) => {
                console.log(error);
                alert('Error: Request failed with status code 500')
            });
        }else{
            alert("Enter the code")
        }
    }
    return (
        <View style={styles.view1}>
            <Header
                leftButtonIcon={Images.back}
                leftButtonAction={() => navigation.goBack()}
            />
            <View style={styles.view2}>
                <Text style={styles.verifyName}>{`Verify  ${props.route.params.data}`}</Text>
                <Text style={{ fontSize: 16, color: Colors.grey, marginBottom: 16 }}> ENTER 4 DIGIT CODE</Text>
                <Text style={styles.text2}>You should receive an SMS from</Text>
                <Text style={styles.text2}>aido with a valid Pin Code</Text>
                <TextInput placeholder="Enter your OTP" onChangeText={codeNumber => setText(codeNumber)} keyboardType='numeric' style={{ width: 250, borderColor: Colors.grey, borderWidth: 1, marginTop: 40 }} />
                <TouchableOpacity onPress={
                    () => POSTApi()
                }>
                    <View style={styles.viewButton}>
                        <Text style={styles.textButton}>SUBMIT</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.dontRec}>Dont't receive the code?</Text>
                <TouchableOpacity onPress={null}><Text style={styles.resendText}>Resend</Text></TouchableOpacity>
            </View>
        </View>
    )
}

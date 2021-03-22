import React , {useEffect} from 'react'
import { View, Text,Image ,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Colors, Images } from '../assets/Colors/colors';
import styles from '../Styles/termsCondStyle';


export default function TermsConditions(props) {
  const navigation = useNavigation();
    return (
        <View style={styles.view1}>
                <Image style={styles.img} source={Images.aido} />
                <View style={styles.view2}>
                    <Text style={styles.txt1}>Tap 'Agree & Continue' to accept the</Text>
                    <Text style={styles.txt2}>Aido terms & conditions</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginPage',  { name: "India", code: "+91" })}>
                        <View style={styles.viewbutton}>
                            <Text style={styles.btnText}>AGREE  &  CONTINUE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../assets/Colors/colors';

const styles = StyleSheet.create({
    view1:{
        flex: 1, backgroundColor: 'white' 
    },
    img:{
        height: hp('46%'), width:'100%'
    },
    view2:{
        padding: 30, marginTop: 30, alignItems: 'center' 
    },
    viewbutton:{
        backgroundColor: Colors.light_green,
        height: 60,
        width: 300,
        marginTop: hp('10%'),
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText:{
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    txt1:{
        fontSize: 18 
    },
    txt2:{
        fontSize: 17.5,
        color: '#00FA9A'
    }

});
export default styles;
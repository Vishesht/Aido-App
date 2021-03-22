import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../assets/Colors/colors';

const styles = StyleSheet.create({
    view1:{
        flex: 1,
        backgroundColor:Colors.white
    },
    view2:{
        alignItems: 'center',
         margin: 20
    },
    verifyName:{
        fontSize: 22,
        color: Colors.black,
        marginBottom: 15
    },
    text2:{
        fontSize: 16, 
        color: Colors.grey
    },
    viewButton:{
        alignSelf: 'center',
        backgroundColor: '#00FA9A',
        height: 50, width: 180, marginTop: hp('4%'),
        borderRadius: 30, alignItems: 'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    resendText:{
        color: Colors.light_green
    },
    dontRec:{
        marginTop: 20
    }

});
export default styles;
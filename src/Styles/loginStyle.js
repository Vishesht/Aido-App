import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    text1: {
        fontWeight: 'bold', fontSize: 19, padding: 20
    },
    viewButton: {
        alignSelf: 'center',
        backgroundColor: '#00FA9A',
        height: 60, width: 300, marginTop: hp('6%'),
        borderRadius: 30, alignItems: 'center',
        justifyContent: 'center',
    },
    viewButtonText: {
        fontSize: 14, color: 'white',
        fontWeight: 'bold', letterSpacing: 1
    },
    text2:{
        padding: 24, alignSelf: 'center', color: 'grey',
    },
    img:{
        height: 20, width: 20, alignSelf: 'center', margin: 5, 
    },
    view1:{
        flexDirection: 'row', marginTop: hp('4%') 
    },
    line:{
        marginBottom: 15, borderBottomColor: 'grey', borderBottomWidth: 1,
    }
   

});
export default styles;
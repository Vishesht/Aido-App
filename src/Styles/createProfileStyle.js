import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../assets/Colors/colors';

const styles = StyleSheet.create({
    headertxt:{
        color:Colors.light_green ,
        fontSize:16,
        fontWeight:'bold',
    },
    headerview:{
        alignItems:'flex-end',padding:10,
    },
    text1:{
        alignSelf:'center',fontWeight:'bold',fontSize:24,padding:20,margin:20
    },
    view1:{
        height:380,backgroundColor:Colors.grey
    },
    view2:{
        flexDirection:'row',justifyContent:'space-evenly',marginVertical:40,position:'relative', bottom:0
    },
    imgstyle:{
        height:50,width:50
    }


});
export default styles;
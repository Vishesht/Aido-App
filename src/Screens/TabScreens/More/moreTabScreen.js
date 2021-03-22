import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Images ,Colors} from '../../../assets/Colors/colors';


export const moreArrayData = [
    { id: '1', value: 'Getting started', desc:'See tutorials of what you can do with temi' },
    { id: '2', value: 'How to drive', desc:'See tutorials of how to drive temi'},
    { id: '3', value: 'Temi app Store',desc:'Enter temi app store and install apps to your temi' },
];
export const moreArrayData1 = [
    { id: '1', value: 'Activities', desc:'Access all of your interactions with temi to view previous requests,photos,videos,and share with others at an instant.' },
    { id: '2', value: 'Support', desc:'Start a chat with our support representative'},
    { id: '3', value: 'Dark mode',desc:'By default your phone theme is choosen' },
    { id: '4', value: 'About',desc:'See terms and conditions, Privacy Policy and more.' },
    { id: '5', value: 'Firewall mode',desc:'Enable to have temi work under your network firewall. Please contact support to receive the firewall wishlist' },
    { id: '6', value: 'Share aido app with friend and family',desc:'Send the link to temi for your friends and family' },
];

export default function MoreTabScreen() {
    const navigation = useNavigation();
    const [listItems, setListItems] = useState(moreArrayData);
    const [listItems1, setListItems1] = useState(moreArrayData1);
    const ItemView = ({ item }) => {
        return (
            // FlatList Item
            <TouchableOpacity onPress={null}>
            <View style={{marginBottom:15,marginTop:20}} >
                <Text style={{fontSize:20}}>{item.value}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{width:250}} >{item.desc}</Text>
                    <Image style={{height:14,width:14,marginRight:10 }} source={Images.right_icon} />
                </View>
            </View>
            </TouchableOpacity>
        );
    };
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: Colors.white, height: 220 }}>
                <Text style={{ alignSelf: 'center', fontSize: 26 }}>AIDO</Text>
                <Image style={{ height: 25, width: 25, alignSelf: 'flex-end', padding: 5, margin: 8 }} source={Images.edit} />
            </View>
            <View style={{marginTop:20,backgroundColor:Colors.white,padding:20}}>
                <Text style={{color:Colors.light_green,fontWeight:'bold',fontSize:16}}>AIDO</Text>
                <FlatList
                    data={listItems}
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={{marginTop:20,backgroundColor:Colors.white,padding:20,marginBottom:20}}>
                <Text style={{color:Colors.light_green,fontWeight:'bold',fontSize:16}}>AIDO APP</Text>
                <FlatList
                    data={listItems1}
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
        </ScrollView>
        
    )
}

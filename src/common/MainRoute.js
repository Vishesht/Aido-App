import React from 'react';
import { Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import TermsConditions from '../Screens/termsCondition'
import CreateProfile from '../Screens/CreateProfile';
import ProfileInfo from '../Screens/ProfileInfo';
import ScanQr from '../Screens/scanQr';
import ScanCamera from '../Screens/ScanScreens/scanCamera';
import CheckYourMail from '../Screens/CheckYourMail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../assets/Colors/colors';
import AidoHomeScreen from '../Screens/TabScreens/Aido/aidoScreen';
import ScanQrHome from '../Screens/TabScreens/scanQr/scanQrHome';
import CallsHome from '../Screens/TabScreens/calls/calls';
import MoreTabScreen from '../Screens/TabScreens/More/moreTabScreen';
import CountryCodeList from '../Screens/CountryCodeList';
import VerificationCode from '../Screens/VerificationCode';
import ConfirmProfileImage from '../Screens/ConfirmProfileImage';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack(props) {
    return (
        <Stack.Navigator initialRouteName="TermsConditions" screenOptions={{ headerShown: false}}>
            <Stack.Screen  name="TermsConditions" component={TermsConditions} />
            <Stack.Screen  name="LoginPage" component={LoginScreen} />
            <Stack.Screen  name="VerificationCode" component={VerificationCode} />
            <Stack.Screen  name="CreateProfile" component={CreateProfile} />
            <Stack.Screen  name="ProfileInfo" component={ProfileInfo} />
            <Stack.Screen  name="ScanQr" component={ScanQr} />
            <Stack.Screen  name="ScanCamera" component={ScanCamera} />
            <Stack.Screen  name="CheckYourMail" component={CheckYourMail} />
            <Stack.Screen  name="HomeScreen" component={HomeTab} />
            <Stack.Screen  name="CountryCodeList" component={CountryCodeList} />
            <Stack.Screen  name="ConfirmProfileImage" component={ConfirmProfileImage} />
        </Stack.Navigator>
    )
}
function HomeTab(props) {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let icon = getIconForTab(route, focused);
                //return <Ionicons name={icon} size={size} color={color} />;
                return <Image resizeMode={'center'} style={{ width: 22, tintColor: focused ? Colors.tabColor : Colors.grey }} source={icon} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: Colors.tabColor,
                inactiveTintColor: Colors.grey,
            }} >
            <Tab.Screen name="Aido" component={AidoHomeScreen} />
            <Tab.Screen name="Calls" component={CallsHome} />
            <Tab.Screen name="ScanQrs" component={ScanQrHome} />
            <Tab.Screen name="More" component={MoreTabScreen} />
        </Tab.Navigator>
    )
}

function getIconForTab(route, focused) {
    let icon;

    if (route.name === 'Aido') {
        icon = focused ? require('../assets/Images/add.png') : require('../assets/Images/add.png');
    } else if (route.name === 'Calls') {
        icon = focused ? require('../assets/Images/phn.png') : require('../assets/Images/phn.png');
    } else if (route.name === 'ScanQrs') {
        icon = focused ? require('../assets/Images/qr.png') : require('../assets/Images/qr.png');
    } else {
        icon = focused ? require('../assets/Images/menu2.png') : require('../assets/Images/menu2.png');
    }

    return icon;
}

// function MyTopTabs() {
//     return (
//       <TopTab.Navigator>
//         <TopTab.Screen name="Home" component={ScanQr} />
//         <TopTab.Screen name="Settings" component={TermsConditions} />
//       </TopTab.Navigator>
//     );
//   }

const MainRoute = props => {

    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
};

export default MainRoute;
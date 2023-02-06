import * as React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/pages/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from './src/pages/profile/index';
import AboutUsScreen from './src/pages/aboutUsScreen';
import CustomDrawer from './src/pages/Drawer/Drawer';
import {COLORS} from './src/constant';
import PrivacyPolicy from './src/pages/PrivacyPolicy';
import ContactUs from './src/pages/ContactUs';

// function HomeScreen() {
// return (
// 	<View style={{ flex: 1, alignItems: 'center',
// 				justifyContent: 'center' }}>
// 		<Text>Home page</Text>
// 	</View>
// );
// }

function NotificationsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notifications Page</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Page</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function AppContainer({setToken}) {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        drawerActiveBackgroundColor: COLORS.purple,
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.white,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({color, focused}) => (
            <Entypo name="home" size={22} color={COLORS.pink} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerIcon: ({color, focused}) => (
            <FontAwesome name="user" size={22} color={COLORS.pink} />
          ),
        }}
      />
      {/* <Drawer.Screen screenOptions={{headerShown:true}} name="Share App" component={AboutScreen} /> */}
      <Drawer.Screen
        name="About App"
        component={AboutUsScreen}
        options={{
          title: 'About App',
          drawerIcon: ({color, focused}) => (
            <Ionicons name="information-circle" size={22} color={COLORS.pink} />
          ),
        }}
      />
       <Drawer.Screen
        name="Privacy policy"
        component={PrivacyPolicy}
        options={{
          title: 'Privacy policy',
          drawerIcon: ({color, focused}) => (
            <MaterialIcons name="privacy-tip" size={22} color={COLORS.pink} />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          title: 'ContactUs',
          drawerIcon: ({color, focused}) => (
            <Entypo name="lock" size={22} color={COLORS.pink} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Logout"
        component={AboutScreen}
        options={{
          title: 'Logout',
          drawerIcon: ({color, focused}) => (
            <Ionicons name="ios-exit" size={22} color={COLORS.pink} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}

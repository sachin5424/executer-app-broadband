import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator }
		from '@react-navigation/drawer';
import { NavigationContainer }
		from '@react-navigation/native';
import HomeScreen from './pages/HomeScreen'


  import MyComponent from './pages/Drawer/Drawer';
  import ProfileScreen from './pages/profile/index';
  import AboutUsScreen from './pages/aboutUsScreen';
  import TermsAndServiceScreen from './pages/Terms-and-service'

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
	<View style={{ flex: 1, alignItems: 'center',
				justifyContent: 'center' }}>
	<Text>Notifications Page</Text>
	</View>
);
}

function AboutScreen() {
    
return (
	<View style={{ flex: 1, alignItems: 'center',
				justifyContent: 'center' }}>
	<Text>About Page</Text>
	</View>
);
}
const Drawer = createDrawerNavigator();



export default function App({setToken}) {

return (
	<NavigationContainer   >
	<Drawer.Navigator drawerContent={props=><MyComponent {...props}/>}  initialRouteName="Home"  screenOptions={{
        headerShown: false
      }}>
		<Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
		<Drawer.Screen name="Terms & condition"
					component={TermsAndServiceScreen} />
		<Drawer.Screen  name="Privacy policy" component={AboutScreen} />
        {/* <Drawer.Screen screenOptions={{headerShown:true}} name="Share App" component={AboutScreen} /> */}
        <Drawer.Screen name="About App" component={AboutUsScreen} />
        <Drawer.Screen name="Logout"  component={AboutScreen} />
	</Drawer.Navigator>
	</NavigationContainer>
);
}




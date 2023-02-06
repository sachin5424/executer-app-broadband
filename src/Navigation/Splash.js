import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { checkUser } from '../../master.service';
import { selectUserToken, USERTOKEN } from '../redux/UserSlice';
import { COLORS } from '../constant/COLORS';
import { CustomStatusBar } from '../partials';
import Login from '../pages/auth/Login';
import { Images } from '../constant';
import AppContainer from '../../test';
import Context from '../Context/Context';
import ComplainPin from '../pages/ComplainPin';


const Splash = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const userToken = useSelector(selectUserToken);
  const {ProfileApi} = Context();

  useEffect(() => {
    console.log('drxrx');

    if (!userToken) {
      checkUser((user) => {
        // console.log({user});
        setLoading(false);
        dispatch(USERTOKEN({userToken: user}));
        ProfileApi()
        // dispatch(REFERCODE(referCode));
      },()=>{
        setLoading(false);
      });
    } else {
      ProfileApi()
      setLoading(false);
    }
    // setTimeout(, 2000);
  }, [userToken]);

  if (loading) {
    console.log('enter loading');
    return (
      <View style={{backgroundColor: COLORS.purple, height: '100%'}}>
        <CustomStatusBar bgColor={COLORS.purple} content={'light-content'} />
        <View style={{marginLeft: 0, marginTop: 70, flex: 1}}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 20,
              marginTop: 50,
              marginLeft: 50,
            }}>
            Welcome
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: '400',
              fontSize: 15,
              marginTop: 20,
              marginLeft: 50,
            }}>
            Connecting you to a fast and easy internet connection is our
            aim.come{' '}
          </Text>

          <View style={{marginTop: 70, padding: 10, marginLeft: 0}}>
            <Image
              source={Images.splash}
              style={{width: '100%', height: 250}}
            />
          </View>
        </View>

        <View style={{marginVertical: 20}}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '100',
              fontSize: 10,
              marginTop: 50,
              marginLeft: 50,
              textAlign: 'center',
            }}>
            By continuing you agree to accept our term of servcies
          </Text>
        </View>

        <View
          style={{
            marginLeft: 40,
            width: '100%',
            marginTop: 0,
            marginVertical: 20,
          }}>
          {/* <CustomButton
            title={'Get Started'}
            containerStyles={{backgroundColor: '#FE8FB0'}}
            //   eventHandler={}
          /> */}
        </View>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  console.log({userToken});
  if (!userToken) {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
          name="CircularProgrssBar"
          component={CircularProgrssBar}
          options={{headerShown: false}}
        /> */}
          {/* <Stack.Screen
          name="Timer"
          component={Timer}
          options={{headerShown: false}}
        /> */}
          <Stack.Screen
            name="AppContainer"
            component={AppContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ComplainPin"
            component={ComplainPin}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Notification"
            component={Notification}
            // options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({});

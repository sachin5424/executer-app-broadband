import React from 'react';
import {SafeAreaView, Image, View, Text, TextInput} from 'react-native';

import {SvgCssUri} from 'react-native-svg';
import {Avatar} from 'react-native-paper';
import Logo from './logo.svg';
import {Button} from 'react-native-paper';
import OTPScreen from './OTPScreen';
function LoginScreen({setVerifyOtp}) {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#1D0553', height: '100%'}}>
        <View style={{top: 100, left: 94}}>
          <Avatar.Image
            style={{left: 12}}
            size={164}
            source={{uri: 'https://picsum.photos/200/300'}}
          />
          <Text
            style={{
              left: 48,
              top: 14,
              fontSize: 28,
              color: 'white',
              fontWeight: '900',
              letterSpacing: 2,
            }}>
            Login
          </Text>
        </View>
        <View
          style={{
            left: 28,
            width: 333,
            top: 134,
            fontSize: 28,
            fontWeight: '',
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              height: 53,
              paddingLeft: 12,
              borderRadius: 23,
            }}
            label="jhgf"
          />
          <View style={{margin: 10}}>
            <Button
              mode="contained"
              style={{
                backgroundColor: '#FE8FB0',
                height: 53,
                margin: 9,
                borderRadius: 30,
                padding: 8,
                fontSize: 23,
                fontWeight: '900',
              }}
              onPress={() => setVerifyOtp(true)}>
              Login
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function LoginView({setToken}) {
  const [verifyOtp, setVerifyOtp] = React.useState(false);
  return (
    <>
      {verifyOtp == true ? (
        <OTPScreen {...{setToken}} />
      ) : (
        <LoginScreen {...{setVerifyOtp}} />
      )}
    </>
  );
}

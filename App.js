/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import HomeScreen from './pages/HomeScreen'

import TextSceen from './test';
import LoginScreen from './pages/auth/loginScreen'



const App = () => {
  const [toke,setToken] = React.useState(false)
  return (
    <>
      {/* <SafeAreaView style={{ background:"red"}}>
     <Test/>
    </SafeAreaView> */}
    {toke == true?<TextSceen {...{setToken}}/>:<LoginScreen {...{setToken}}/>}
   
    </>
  
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

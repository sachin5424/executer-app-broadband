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
import {Provider} from 'react-redux';
// import HomeScreen from './pages/HomeScreen'

import TextSceen from './test';
import LoginScreen from './src/pages/auth/loginScreen';
import AppContainer from './test';
import store from './src/redux/Store';
import Splash from './src/Navigation/Splash';
import CustomisableAlert from 'react-native-customisable-alert';
import {ContextState} from './src/Context/Context';

const App = () => {
  const [toke, setToken] = React.useState(false);
  return (
    <Provider store={store}>
      <ContextState>
        {/* <SafeAreaView style={{ background:"red"}}>
     <Test/>
    </SafeAreaView> */}
        {/* {toke == true?<TextSceen {...{setToken}}/>:<LoginScreen {...{setToken}}/>} */}
        {/* <AppContainer /> */}
        <Splash />
        <CustomisableAlert
          titleStyle={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        />
      </ContextState>
    </Provider>
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

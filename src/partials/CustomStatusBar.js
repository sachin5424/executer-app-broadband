import {View, Text, StatusBar, Platform, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import { COLORS } from '../constant';

const CustomStatusBar = ({bgColor, content, ...props}) => {
  // console.log({ios: Platform.OS == 'ios'});
  return (
    <>
      {Platform.OS == 'ios' ? (
        // <View style={[styles.appBar, {backgroundColor: COLORS.purple}]}>
        //   <SafeAreaView>
            <StatusBar
              translucent
              backgroundColor={bgColor} 
              barStyle={content || 'dark-content'}
              // {...props}
            />
        //   </SafeAreaView>
        // </View>
      ) : (
        <StatusBar
          backgroundColor={bgColor}
          barStyle={content || 'light-content'}
          // showHideTransition={"fade"}
          //   hidden={hidden}
        />
      )}
    </>
  );
};

export default CustomStatusBar;


const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});


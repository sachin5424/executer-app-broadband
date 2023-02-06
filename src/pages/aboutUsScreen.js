import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

export default function AboutUsScreen() {
    // console.log({});
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="white-content" backgroundColor="black" />

      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <WebView
          originWhitelist={['*']}
          source={{uri: 'https://repairmens.com/betternet/about.php'}}
        // source={{ html: '<h1>Hello world</h1>' }}
          clearCache={true}
        //   onLoadEnd={error => {
        //     console.log({onLoadEnd: error});
        //     console.log("onLoadEnd");
        //   }}
        //   onHttpError={error => {
        //     console.log({onHttpError: error});
        //     console.log("onHttpError");
        //   }}
          onError={error => {
            console.log({onError: error});
            console.log("ERROR");
          }}
          
        />
      </SafeAreaView>
    </View>
    // <View style={styles.container}>
    //   <WebView
    //     // source={{uri: 'https://www.npmjs.com/package/react-native-webview'}}
    //     originWhitelist={['*']}
    //     source={{ html: '<h1>Hello world</h1>' }}
    //     style={{flex: 1, width: '100%', marginTop: 20 }}
    //   />
    // </View>
    //   <SafeAreaView style={{flex: 1, width: "100%"}}>

    //       {/* <ScrollView  style={{ backgroundColor: "#1D0553" ,color: "#FFFFFF"}}>
    //           <View style={{ backgroundColor: "",padding:23}}>
    //               <Text style={{fontSize:26,fontWeight:"900",letterSpacing:2,color: "#FFFFFF"}}>What</Text>
    //               <Text style={{fontSize:16,fontWeight:"400",marginTop:5,letterSpacing:2,color: "#FFFFFF"}}>About Online Service</Text>
    //           </View>
    //           <View style={{backgroundColor:"#FE8FB0",width:133,height:9,marginLeft:23}}></View>
    //           <View  style={{ backgroundColor: "",padding:23}}>
    //               <Text  style={{fontSize:18,marginTop:5,letterSpacing:2,color: "#FFFFFF"}}>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    //               </Text>
    //           </View>
    //           <View  style={{ backgroundColor: "",paddingTop:5,paddingLeft:22}}>
    //               <Text  style={{fontSize:18,marginTop:5,letterSpacing:2,color: "#FFFFFF"}}>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    //               </Text>
    //           </View>
    //       </ScrollView> */}
    //   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //   justifyContent: 'space-between',
  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1,
  },
});

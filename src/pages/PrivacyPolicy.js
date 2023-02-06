import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import WebView from 'react-native-webview';

export default function PrivacyPolicy() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="white-content" backgroundColor="black" />

      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <WebView
          originWhitelist={['*']}
          source={{uri: 'https://repairmens.com/betternet/privacy.php'}}
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
    //   <SafeAreaView>
    //       <ScrollView  style={{ backgroundColor: "#1D0553" ,color: "#FFFFFF"}}>
    //           <View style={{ backgroundColor: "",padding:23}}>
    //               {/* <Text style={{fontSize:26,fontWeight:"900",letterSpacing:2,color: "#FFFFFF"}}>What</Text> */}
    //               <Text style={{fontSize:16,fontWeight:"400",marginTop:5,letterSpacing:2,color: "#FFFFFF"}}>Terms of service</Text>
    //           </View>
    //           <View style={{backgroundColor:"#FE8FB0",width:133,height:9,marginLeft:23}}></View>
    //           <View  style={{ backgroundColor: "",padding:23}}>
    //               <Text  style={{fontSize:18,marginTop:5,letterSpacing:2,color: "#FFFFFF"}}>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    //               </Text>
    //           </View>
    //           <View  style={{ backgroundColor: "",paddingTop:5,paddingLeft:22}}>
    //               <Text  style={{fontSize:16,marginTop:5,letterSpacing:1,color: "#FFFFFF"}}>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    //               </Text>
    //           </View>
    //       </ScrollView>
    //   </SafeAreaView>
  )
}

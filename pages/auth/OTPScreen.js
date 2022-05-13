import React from 'react';
import {SafeAreaView,View,TextInput,Text,ScrollView,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

export default function OTPScreen({setToken}) {
  return (
      <SafeAreaView>
          <ScrollView style={{height:"100%",backgroundColor:"#1D0553"}}>
          <View style={{left: 20,top: 210,width:340,height:168,right:10}}>
               <Text style={{padding:10,fontSize:17,fontWeight:"900",color:'white'}}>We have sent an OTP to your Mobile</Text>
               <Text style={{left:20,top:5,fontSize:17,fontWeight:"600",color:'white'}}>Please check your mobile number 071*****12 continue to reset your password</Text>
           </View>
           <View style={style.textInputContainer}>
             <TextInput style={style.textInput} label="Enter your"/>
             <TextInput style={style.textInput} label="jhgf"/>
             <TextInput style={style.textInput} label="jhgf"/>
             <TextInput style={style.textInput} label="jhgf"/>
           </View>
           <Button mode="contained" style={style.textInputButton} onPress={() => setToken(true)}>
               Login
             </Button>
          </ScrollView>
          
      </SafeAreaView>

  )
}


const style = StyleSheet.create({
    textInput:{
        backgroundColor: 'white',height:53,paddingLeft:12,borderRadius:23,width:45,marginLeft:32
    },
    textInputContainer:{
        margin:10,flexDirection:'row',padding:10,top:163,textAlign:"center",
    },
    textInputButton:{
       width:150,top:169,left:109
    }
})
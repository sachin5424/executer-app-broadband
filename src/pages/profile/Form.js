import React from 'react';
import {View,Text} from 'react-native'
import { Chip } from 'react-native-paper';

export default function Form() {
  return (
    <>
     <View style={{paddingTop:20,paddingLeft:20}}>
       <Text style={{color: 'white',fontWeight: 'bold',fontSize:18}}>Id proof</Text>
       <View style={{marginRight:15,marginTop:10,backgroundColor: '#e8aeae',height:130,borderRadius:10}}>
       <Text style={{textAlign:"center",marginTop:60,fontSize:19,fontWeight: 'bold',color: 'white'}}>Upload your ID</Text>

       </View>
   </View>
   <View style={{paddingTop:10,paddingLeft:20}}>
       <Text style={{color: 'white',fontWeight: 'bold',fontSize:18}}>Address Proof</Text>
       <View style={{marginRight:15,marginTop:10,backgroundColor: '#e8aeae',height:130,borderRadius:10}}>
           <Text style={{textAlign:"center",marginTop:60,fontSize:19,fontWeight: 'bold',color: 'white'}}>Upload your ID</Text>
       </View>
   </View>
   <View style={{paddingTop:10,paddingLeft:20,marginBottom:20}}>
       <Text style={{color: 'white',fontWeight: 'bold',fontSize:18}}>Address Proof</Text>
       <Chip style={{backgroundColor:"#e8aeae",marginTop:10,width:160,color:"#fffff",}}  onPress={() => console.log('Pressed')}>
       +91 0000 0000 00
        </Chip>
   </View>
    </>
  
  )
}

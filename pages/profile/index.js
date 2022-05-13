import React from 'react';
import { View, Text,
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
useColorScheme,
} from 'react-native'
import { Avatar } from 'react-native-paper';
import CardScreen from './card';
export default function Index() {
    return (
        <SafeAreaView >
            <ScrollView style={{backgroundColor:"#ffff"}}>
            <View style={{ flexDirection: "row", }}>
                <View style={{padding:20}}>
                 <Avatar.Image size={140} source={{uri:"https://picsum.photos/200/300"}} />
                 <Text style={{color:"white",color:"black",fontWeight:"bold",fontSize:22,padding:12}}>Vaccinated</Text>
                </View>
                <View style={{paddingLeft:35,paddingTop:50}}>
                    <Text style={{fontSize:23,fontWeight:"bold",color:"black"}}>Shanaya</Text>
                    <View style={{padding:5,backgroundColor:"#e8aeae",borderRadius:20,marginTop:12}}>
                    <Text style={{fontSize:16,textAlign:"center",color:"black",fontWeight:"bold"}}>Edit</Text> 
                    </View>
                    {/* <Text style={{fontSize:23,fontWeight:"bold"}}>Shanaya</Text> */}
                </View>
            </View>
            <View>
                <CardScreen/>
            </View>
            </ScrollView>
        </SafeAreaView>

    )
}

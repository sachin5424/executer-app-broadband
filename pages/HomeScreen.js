import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-paper';
import TextCarousel from './TextCarousel';
import ComplaintScreen from './Complaint/index';


export default function HomeScreen({navigation}) {

    console.log({navigation});
    return (
        <>
        <SafeAreaView>
        <ScrollView style={{ backgroundColor: "white" ,}}>
            <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
            <View style={{ width: '100%', height: 90, flexDirection: "row" }} >
                    
                    <View style={{ padding: 13, }} >
                        <Avatar.Image size={64} source={{uri:"https://picsum.photos/200/300"}} />
                    </View>
                    <View style={{ paddingTop: 19,paddingLeft:4 }}>
                        <Text style={{ fontSize: 22, color: 'black' }}>Welcome </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Shanaya</Text>
                    </View>

                </View>
            </TouchableOpacity>
                
                <View style={{ paddingLeft: 19,paddingTop:10,flexDirection: "row" }}>
                    <Text style={{color: 'black',fontSize:20}}>We have 
                    </Text>
                    <Text style={{fontSize:22,fontWeight: 'bold',marginLeft:5,color: 'black'}}>Awesome</Text>
                </View>
                <View>
                    <Text style={{fontSize:22,color: 'black',paddingLeft:28,letterSpacing:2,paddingTop:5}}>Opportunities</Text>
                </View>
                <View style={{marginTop:16}}>
                    <TextCarousel/>
                </View>
                <View>
                    {[1,2,3,4,5,6,7,8,9,10].map(item=>{
                       return  <ComplaintScreen/>
                    })}
                   
                    {/* <ComplaintScreen/> */}
                </View>
            </ScrollView>
        </SafeAreaView>
       

        </>

    )
}

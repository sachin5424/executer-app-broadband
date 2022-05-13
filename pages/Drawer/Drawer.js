import * as React from 'react';
import { Avatar,View, Button, Card, Title,Text, Paragraph } from 'react-native-paper';
import {ImageBackground} from 'react-native'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'

const TestScreen= () =>{
    return(
        <>
        <View>
    <DrawerItemList style={{backgroundColor:"white",padding:10,marginTop:23}} {...props}/>

        </View>
        </>
    )
}
const MyComponent = (props) => (
  <DrawerContentScrollView  >
      <ImageBackground  style={{padding:17,opacity:2,backgroundColor:''}}>
      <Avatar.Image size={94}  source={{uri:"https://picsum.photos/200/300"}} />
      <Text style={{fontWeight:"bold",fontSize:23,padding:10}}>Sachin</Text>
      </ImageBackground>
    <DrawerItemList style={{backgroundColor:"white",padding:10,marginTop:23}} {...props}/>
  </DrawerContentScrollView>
);

export default MyComponent;
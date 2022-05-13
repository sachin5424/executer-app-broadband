import React from 'react';
import { Avatar, Button, Card, Title, Paragraph,View } from 'react-native-paper';
import {Text,StyleSheet} from 'react-native'


const MyComponent = () => (
    <Card style={style.cardStyle}>
   
      <Card.Content>
        <Title style={{fontSize:21,color:"black"}}>Complaint Pin 20156</Title>
        <Paragraph style={{color:"black"}}>Time: 12.00 pm 12 Oct 2022</Paragraph>
        {/* <Text>Type Of Complaint</Text> */}
      </Card.Content>
      <Card.Content style={{marginTop:10}}>
        <Avatar.Image size={106} style={{marginLeft:235,bottom:2,position:'absolute'}} source={{uri:"https://picsum.photos/200/300"}} />
        <Title style={{marginLeft:245,top:74,fontWeight:"bold",color:"black",fontSize:18,position:'absolute'}} >Complaint</Title>
        <Title style={{fontSize:18,fontWeight:"bold",color:"black",}}>Type Of Complaint</Title>
        <Card.Content style={{margin:0,width:140,marginTop:5,backgroundColor:"#e8aeae",borderRadius:10}}>
        <Title style={{fontSize:11,fontWeight:"bold",color:"white"}}>    Fiber Issue Fold</Title>
      </Card.Content>
      </Card.Content>
      <Card.Content style={{margin:0,marginTop:20}}>
        <Title style={{fontSize:17,fontWeight:"bold",color:"black",}}> 
        Complaint Location
        </Title>
      </Card.Content>
      <Card.Content style={{margin:20,backgroundColor:"#e8aeae",borderRadius:10}}>
        <Title style={{fontSize:11,fontWeight:"bold",color:"white"}}> 18, Vaishali Enclave, Pitampura, New Delhi- 110034</Title>
      </Card.Content>
      <Card.Actions style={{marginBottom:20}}>
      <Button style={{backgroundColor:"#e8aeae",color:"white",width:150,marginLeft:10,borderRadius:30}}>Accept</Button>
      <Button style={{backgroundColor:"#e8aeae",color:"black",width:150,marginLeft:10,borderRadius:30}}>Reject</Button>
    </Card.Actions>
    </Card>
  );
  
  const style = StyleSheet.create({
    cardStyle:{margin:10,borderRadius:30,backgroundColor:"#f7f7f7",shadowColor:'#470000',shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 2,
    
  }
  })
  export default MyComponent;